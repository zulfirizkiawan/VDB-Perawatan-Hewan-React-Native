import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyBantuan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Artikel = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyBantuan} style={styles.img} />
      <View style={styles.Wrapper}>
        <Text style={styles.title}>
          4 Macam Laporan Keuangan Perusahaan dan Cara Membuatnya yang Benar
        </Text>
        <Text style={styles.date}> 26 jan 2021</Text>
      </View>
    </View>
  );
};

export default Artikel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 4,
  },

  img: {
    width: 110,
    height: 80,
    borderRadius: 5,
    marginRight: 12,
  },
  Wrapper: {
    flex: 1,
  },
});
