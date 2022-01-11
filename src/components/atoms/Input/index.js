import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({
  judul,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType,
  RP,
}) => {
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
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}>
        {RP}
      </TextInput>
      <View style={styles.garis} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Tjudul: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: fonts.primary[500],
  },
  input: border => ({
    marginTop: -8,
    fontSize: 14,
    color: border,
    fontFamily: fonts.primary[500],
  }),
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: -14,
  },
});
