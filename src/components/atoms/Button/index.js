import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} />;
  }
  return (
    <View style={styles.wrapBtn}>
      <TouchableOpacity style={styles.BtnLogin} onPress={onPress}>
        <Text style={styles.TxtLogin}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapBtn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 14,

    width: '100%',
  },
  BtnLogin: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 30,
  },
  TxtLogin: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
});
