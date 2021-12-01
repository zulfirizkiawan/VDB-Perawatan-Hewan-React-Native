import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardKehadiran = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapKehad} onPress={onPress}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textJam}>-- : --</Text>
    </TouchableOpacity>
  );
};

export default CardKehadiran;

const styles = StyleSheet.create({
  wrapKehad: {
    backgroundColor: colors.white,
    height: 110,
    width: 185,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  textTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: '#000',
  },
  textJam: {
    fontFamily: fonts.primary[400],
    fontSize: 30,
    color: colors.text.secondary,
    marginTop: 5,
  },
});
