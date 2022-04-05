import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
import {colors, fonts} from '../../utils';

const DrHewan = ({navigation}) => {
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
          <Input judul="Nama Hewan" />

          <PickerJenisHewan />
          <Gap height={15} />
          <Input
            judul="Keturunan"
            note="contoh : (persia, anggora) atau (Pomeranian, poodle)"
          />
          <Gap height={15} />
          <PickerJK />
          <Gap height={15} />
          <Input judul="Catatan" />
          <PickerGejala label="Gejala Pertama" />
          <Gap height={15} />
          <PickerGejala label="Gejala Kedua" />
          <Gap height={20} />
          <Text style={styles.informasiHewan}>Dr. Hewan</Text>
          <Gap height={10} />
          <Input judul="Nama Dr. Hewan" disable />
          <Gap height={10} />
        </View>
        <Gap height={10} />
      </ScrollView>
      <View style={styles.content}>
        <Gap height={15} />
        <Buttons
          title="Selanjutnya"
          onPress={() => navigation.navigate('PembayaranDrHewan')}
        />
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
});
