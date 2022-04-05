import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Buttons,
  Gap,
  Header,
  Input,
  PickerGrooming,
  PickerJenisHewan,
  PickerJK,
  TotalPesan,
  UploadGambar,
} from '../../components';
import {colors, fonts} from '../../utils';

const Grooming = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Grooming" onPress={() => navigation.goBack()} />
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
          <Gap height={5} />
          <Text style={styles.informasiHewan}>Informasi Paket Grooming</Text>
          <Gap height={10} />
          <PickerGrooming />
          <Gap height={10} />
        </View>
        <Gap height={30} />
      </ScrollView>
      <View style={styles.content}>
        <Gap height={15} />
        <Buttons
          title="Selanjutnya"
          onPress={() => navigation.navigate('PembayaranGrooming')}
        />
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
});
