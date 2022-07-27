import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import {DummyProfile} from '../../assets';
import {Buttons, Gap, Header, Input, Output} from '../../components';
import {colors} from '../../utils';

const ProfilDokter = ({navigation, route}) => {
  const {name, workplace, doctor_specialist, price, doctor_photo_path} =
    route.params;

  const OpenWEB = () => {
    Linking.openURL(`https://wa.me/message/DPNBGICN2FWHM1`);
  };

  return (
    <View style={styles.page}>
      <Header title="Profile Dokter" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Image source={{uri: doctor_photo_path}} style={styles.avatar} />
        <Gap height={40} />
        <Input judul="Nama Lengkap" disable value={name} />
        <Gap height={10} />
        <Input judul="Tempat Pratik" disable value={workplace} />
        <Gap height={10} />
        <Input judul="Dokter Spesialis" disable value={doctor_specialist} />
        <Gap height={10} />
        <Output judul="Biaya Konsutasi" value={price} />
        <Gap height={30} />
        <Buttons title="Konsultasi" onPress={OpenWEB} />
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default ProfilDokter;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#F0F0F0',
    padding: 24,
    marginRight: 10,
    alignSelf: 'center',
  },
});
