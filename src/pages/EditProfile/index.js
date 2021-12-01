import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Buttons, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapContent}>
          <Image source={DummyProfile} style={styles.avatar} />
          <Input judul="Nama Lengkap" />
          <Gap height={15} />
          <Input judul="Alamat" />
          <Gap height={15} />
          <Input judul="Tanggal Lahir" />
          <Gap height={15} />
          <Input judul="No. Telepon" />
          <Gap height={15} />
          <Input judul="Email" />
          <Gap height={15} />
          <Input judul="Posisi" />
          <Gap height={20} />
        </View>
      </ScrollView>
      <Buttons title="Simpan" onPress={() => alert('ugh')} />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapContent: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginBottom: 30,
  },
});
