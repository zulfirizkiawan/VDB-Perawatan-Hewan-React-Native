import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILCuti, ILKehadiran, ILResign} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Layanan = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Kehadiran') {
      return <ILKehadiran />;
    }
    if (category === 'Cuti') {
      return <ILCuti />;
    }
    if (category === '  Resign  ') {
      return <ILResign />;
    }
    return <ILKehadiran />;
  };
  return (
    <TouchableOpacity style={styles.wrapLayanan} onPress={onPress}>
      <Icon />
      <Text style={styles.lblLayanan}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  wrapLayanan: {
    alignItems: 'center',
  },
  lblLayanan: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 10,
  },
});
