import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import {ICCalendar, ICNullPhoto} from '../../assets';
import {
  Buttons,
  Gap,
  Header,
  Input,
  PickerJenisHewan,
  PickerJK,
} from '../../components';
import {colors, fonts, showMessage, useForm} from '../../utils';
import moment from 'moment';
import {launchImageLibrary} from 'react-native-image-picker';

const Penitipan = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState(new Date().toDateString());

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState('');

  const [form, setFrom] = useForm({
    animal_name: '',
    animal_type: '',
    descendants: '',
    animal_gender: '',
    note: '',
    tanggal_pengembalian: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_PENITIPAN', value: form});
    console.log('form: ', form);
    navigation.navigate('PembayaranPenitipan');
  };

  const addPhoto = () => {
    launchImageLibrary(
      {
        title: 'Select Image',
        type: 'library',
        options: {
          maxWidth: 200,
          maxHeight: 200,
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
        },
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda Tidak Memilih Foto');
        } else {
          const source = {uri: response.assets[0].uri};
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          console.log('response :', response.assets[0]);
          setPhoto(source);
          dispatch({type: 'SET_PHOTO', value: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Penitipan" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <ICNullPhoto
                    width={90}
                    height={90}
                    style={styles.photoContainer}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          <Text style={styles.informasiHewan}>Informasi Hewan</Text>
          <Gap height={10} />
          <Input
            judul="Nama Hewan"
            value={form.animal_name}
            onChangeText={value => setFrom('animal_name', value)}
          />
          <PickerJenisHewan
            value={form.animal_type}
            onSelectChange={value => setFrom('animal_type', value)}
          />
          <Gap height={15} />
          <Input
            judul="Keturunan"
            note="persia, anggora atau Pomeranian, Cihuahua"
            value={form.descendants}
            onChangeText={value => setFrom('descendants', value)}
          />
          <Gap height={15} />
          <PickerJK
            value={form.animal_gender}
            onSelectChange={value => setFrom('animal_gender', value)}
          />
          <Gap height={15} />
          <Input
            judul="Catatan"
            value={form.note}
            onChangeText={value => setFrom('note', value)}
          />
          <Gap height={5} />
          <Text style={styles.informasiHewan}>Pilih Berapa Hari Penitipan</Text>
          <Gap height={10} />
          <Text style={styles.Tjudul}>Tanggal Penitipan *</Text>
          <View style={styles.wrapTgl}>
            <Image source={ICCalendar} style={styles.imgVector} />
            <Text style={styles.outputs}>{moment().format('DD MMM YYYY')}</Text>
          </View>
          <View style={styles.garis} />
          <Gap height={15} />
          <Text style={styles.Tjudul}>Pilih Tanggal Pengembalian</Text>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <View style={styles.wrapTgl}>
              <Image source={ICCalendar} style={styles.imgVector} />
              <Text style={styles.outputs}>
                {moment(date).format('DD MMM YYYY')}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.garis} />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            value={form.tanggal_pengembalian}
            onConfirm={value => {
              setOpen(false);
              setDate(value);
              setFrom('tanggal_pengembalian', value);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <Gap height={30} />
      </ScrollView>
      <View style={styles.content}>
        <Gap height={15} />
        <Buttons title="Selanjutnya" onPress={onSubmit} />
        <Gap height={15} />
      </View>
    </View>
  );
};

export default Penitipan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 15,
  },
  informasiHewan: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  imgVector: {
    width: 25,
    height: 25,
  },
  Tjudul: {
    color: colors.secondary,
    fontSize: 15,
    fontFamily: fonts.primary[500],
  },
  wrapTgl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outputs: {
    marginTop: 5,
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    marginLeft: 10,
  },
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: 3,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
});
