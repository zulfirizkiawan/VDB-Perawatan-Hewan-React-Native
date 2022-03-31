import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';
import {ILDr, ILGrooming, ILPenitipan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Layanan = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Grooming') {
      return <ILGrooming />;
    }
    if (category === 'Penitipan') {
      return <ILPenitipan />;
    }
    if (category === 'Praktik') {
      return <ILDr />;
    }
    return <ILGrooming />;
  };
  return (
    <TouchableOpacity style={styles.wrapLayanan} onPress={onPress}>
      <Gap height={2} />
      <Icon />
      <Text style={styles.lblLayanan}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  wrapLayanan: {
    alignItems: 'center',
    backgroundColor: colors.Bg.six,
    // shadowColor: '#ABAECA',
    // shadowOffset: {width: 0, height: 4},
    // shadowRadius: 28,
    // shadowOpacity: 0.2,
    // elevation: 10,
    height: 95,
    width: 95,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  lblLayanan: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    marginTop: 10,
  },
});
