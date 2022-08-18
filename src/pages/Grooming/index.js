import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Buttons,
  Gap,
  Header,
  Input,
  PickerGrooming,
  PickerJenisHewan,
  PickerJK,
  UploadGambar,
} from '../../components';
import {colors, fonts, showMessage, useForm} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {ICNullPhoto} from '../../assets';

const Grooming = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [form, setFrom] = useForm({
    animal_name: '',
    animal_type: '',
    descendants: '',
    animal_gender: '',
    note: '',
    packet_grooming: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_GROOMING', value: form});
    navigation.navigate('PembayaranGrooming');
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
      <Header title="Grooming" onPress={() => navigation.goBack()} />
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
          <Text style={styles.informasiHewan}>Informasi Paket Grooming</Text>
          <Gap height={10} />
          <PickerGrooming
            value={form.packet_grooming}
            onSelectChange={value => setFrom('packet_grooming', value)}
          />
          <Gap height={10} />
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

export default Grooming;

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
