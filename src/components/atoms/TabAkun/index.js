import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICArrowRight, ICEmail, ICKeluar, ICPusatbantuan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabAkun = ({category, onPress, categoryStrip}) => {
  const Icon = () => {
    if (category === 'Beri Masukan') {
      return <ICEmail />;
    }
    if (category === 'Pusat Bantuan') {
      return <ICPusatbantuan />;
    }
    if (category === 'Keluar Akun   ') {
      return <ICKeluar />;
    }
    return <ICEmail />;
  };
  const Strip = () => {
    if (categoryStrip === 'Benar') {
      return <View style={styles.stripp} />;
    } else {
    }

    return <View />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapContent}>
        <Icon />
        <Text style={styles.TxtCategory}>{category}</Text>
        <ICArrowRight style={styles.ArrowRight} />
      </View>
      <Strip />
    </TouchableOpacity>
  );
};

export default TabAkun;

const styles = StyleSheet.create({
  wrapContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stripp: {
    backgroundColor: colors.border,
    height: 0.8,
    marginVertical: 10,
  },
  TxtCategory: {
    width: '80%',
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    fontSize: 14,
    letterSpacing: 0.5,
  },
  ArrowRight: {
    marginRight: 3,
  },
});
