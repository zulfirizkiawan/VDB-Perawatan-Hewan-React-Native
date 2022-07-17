import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Buttons, Gap, Header, Input, Output} from '../../components';
import {colors} from '../../utils';

const ProfilDokter = ({navigation, route}) => {
  const {name, workplace, doctor_specialist, price, doctor_photo_path} =
    route.params;
  return (
    <View style={styles.page}>
      <Header title="Profile Dokter" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Image source={{uri: doctor_photo_path}} style={styles.avatar} />
        <Gap height={40} />
        <Input judul="Nama Lengkap" disable value={name} />
        <Gap height={20} />
        <Input judul="Tempat Pratik" disable value={workplace} />
        <Gap height={20} />
        <Input judul="Dokter Spesialis" disable value={doctor_specialist} />
        <Gap height={20} />
        <Output judul="Biaya Konsutasi" value={price} />
        <Gap height={40} />
        <Buttons title="Konsultasi" />
      </View>
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
