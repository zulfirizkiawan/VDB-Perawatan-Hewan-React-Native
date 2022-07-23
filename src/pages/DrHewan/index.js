import React from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
import {colors, fonts, useForm} from '../../utils';
import {getDokterData} from '../../redux/action/home';

const DrHewan = ({navigation}) => {
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

  return (
    <View style={styles.page}>
      <Header title="Praktik Dr. Hewan" onPress={() => navigation.goBack()} />
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
});
