import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Buttons, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const ProfilDokter = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile Dokter" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Image source={DummyProfile} style={styles.avatar} />
        <Gap height={40} />
        <Input judul="Nama" disable />
        <Gap height={20} />
        <Input judul="Tempat Pratik" disable />
        <Gap height={20} />
        <Input judul="Dokter" disable />
        <Gap height={20} />
        <Input judul="Biaya Konsutasi" RP="Rp." disable />
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
    height: 112,
    width: 112,
    borderRadius: 112 / 2,
    alignSelf: 'center',
    marginTop: 20,
  },
});
