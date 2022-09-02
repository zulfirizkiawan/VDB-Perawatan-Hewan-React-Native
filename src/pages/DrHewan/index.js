import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Buttons,
  Gap,
  Header,
  Input,
  PickerGejala,
  PickerJenisHewan,
  PickerJK,
  UploadGambar,
} from '../../components';
import {colors, fonts, showMessage, useForm} from '../../utils';
import {ICNullPhoto} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const DrHewan = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [form, setFrom] = useForm({
    animal_name: '',
    animal_type: '',
    descendants: '',
    animal_gender: '',
    note: '',
    first_symptom: '',
    second_symptom: 'Tidak ada',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_PRAKTIK', value: form});
    console.log('form: ', form);
    navigation.navigate('PembayaranDrHewan');
  };

  const addPhoto = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    }).then(images => {
      console.log(images);
      const source = {uri: images.path};

      const dataImage = {
        uri: images.path,
        type: images.mime,
        name: 'cat_pic.jpeg',
      };
      console.log('response :', dataImage);
      setPhoto(source);
      dispatch({type: 'SET_PHOTO', value: dataImage});
      dispatch({type: 'SET_UPLOAD_STATUS', value: true});
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Praktik Dr. Hewan" onPress={() => navigation.goBack()} />
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
          <PickerGejala
            label="Tindakan pertama"
            value={form.first_symptom}
            onSelectChange={value => setFrom('first_symptom', value)}
            note="Note : Tindakan ini harus ada konsultasi oleh dokter"
          />
          <Gap height={15} />
          <PickerGejala
            label="Tindakan Kedua"
            value={form.second_symptom}
            onSelectChange={value => setFrom('second_symptom', value)}
            note="Note : Tindakan ini harus ada konsultasi oleh dokter"
          />
          <Gap height={20} />
        </View>
        <Gap height={10} />
      </ScrollView>
      <View style={styles.content}>
        <Gap height={15} />
        <Buttons title="Selanjutnya" onPress={onSubmit} />
        <Gap height={15} />
      </View>
    </View>
  );
};

export default DrHewan;

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
  noteHewan: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
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
