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
import {ICCalendar} from '../../assets';
import {
  Buttons,
  Gap,
  Header,
  Input,
  PickerJenisHewan,
  PickerJK,
  TotalPesan,
  UploadGambar,
} from '../../components';
import {colors, fonts, useForm} from '../../utils';

const Penitipan = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [form, setFrom] = useForm({
    animal_name: '',
    animal_type: '',
    descendants: '',
    animal_gender: '',
    note: '',
    tanggal_pengembalian: '',
  });

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(year + '-' + month + '-' + date);
  }, []);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_PENITIPAN', value: form});
    console.log('form: ', form);
    navigation.navigate('PembayaranPenitipan');
  };

  return (
    <View style={styles.page}>
      <Header title="Penitipan" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <View style={{alignItems: 'center'}}>
            <UploadGambar />
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
          <Text style={styles.Tjudul}>Tanggal Penitipan</Text>
          <View style={styles.wrapTgl}>
            <Image source={ICCalendar} style={styles.imgVector} />
            <Text style={styles.outputs}>{currentDate}</Text>
          </View>
          <View style={styles.garis} />
          <Gap height={15} />
          <Text style={styles.Tjudul}>Tanggal Pengembalian</Text>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <View style={styles.wrapTgl}>
              <Image source={ICCalendar} style={styles.imgVector} />
              <Text style={styles.outputs}>
                {date.toISOString().substring(0, 10)}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.garis} />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
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
});
