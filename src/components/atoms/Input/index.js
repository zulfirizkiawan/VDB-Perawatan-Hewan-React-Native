import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fonts} from '../../../utils';

const Input = ({judul}) => {
  return (
    <View>
      <Text style={styles.Tjudul}>{judul}</Text>
      <TextInput style={styles.TI}> </TextInput>
      <View style={styles.garis} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Tjudul: {
    color: '#858585',
    fontSize: 14,
    fontFamily: fonts.primary[500],
  },
  TI: {
    marginTop: -8,
    fontSize: 16,
    color: '#070821',
    fontFamily: fonts.primary[400],
  },
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: -5,
  },
});
