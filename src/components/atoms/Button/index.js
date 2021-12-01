import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
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
    paddingHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: -3},
    shadowRadius: 2,
    elevation: 25,
  },
  BtnLogin: {
    backgroundColor: '#0D9C57',
    paddingVertical: 15,
    borderRadius: 30,
  },
  TxtLogin: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
  },
});
