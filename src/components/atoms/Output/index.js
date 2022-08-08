import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Number from '../../molecules/Number';

const Output = ({judul, value, note}) => {
  const [border, setBorder] = useState(colors.text.primary);
  const onFocusForm = () => {
    setBorder(colors.text.primary);
  };
  const onBlurForm = () => {
    setBorder(colors.text.primary);
  };
  return (
    <View>
      <Text style={styles.Tjudul}>{judul}</Text>
      <Number number={value} style={styles.input(border)} />
      <View style={styles.garis} />
      <Text style={styles.notes}>{note}</Text>
    </View>
  );
};

export default Output;

const styles = StyleSheet.create({
  Tjudul: {
    color: colors.secondary,
    fontSize: 15,
    fontFamily: fonts.primary[500],
  },
  input: border => ({
    marginTop: -2,
    fontSize: 14,
    color: border,
    fontFamily: fonts.primary[400],
  }),
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: 0,
  },
  notes: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: fonts.primary[400],
    marginTop: 2,
  },
});
