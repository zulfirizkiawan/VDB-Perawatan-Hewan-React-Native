import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const PickerGrooming = ({value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.Tjudul}>Jenis Grooming</Text>
      <Picker
        selectedValue={value}
        onValueChange={itemValue => onSelectChange(itemValue)}
        style={{marginLeft: -10}}>
        <Picker.Item label="-- Pilih Paket Grooming --" />
        <Picker.Item label="Basic - Rp. 65.000" value="Basic" />
        <Picker.Item label="+ Obat Kutu - Rp. 165.000" value="Kutu" />
        <Picker.Item label="+ Obat Jamur - Rp. 150.000" value="Jamur" />
        <Picker.Item
          label="Kutu dan Jamur - Rp. 200.000"
          value="Kutu dan Jamur"
        />
      </Picker>
      <View style={styles.garis} />
    </View>
  );
};

export default PickerGrooming;

const styles = StyleSheet.create({
  Tjudul: {
    color: colors.secondary,
    fontSize: 15,
    fontFamily: fonts.primary[500],
    marginBottom: -12,
  },

  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: -10,
  },
});
