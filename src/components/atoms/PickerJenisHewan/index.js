import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const PickerJenisHewan = ({value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.Tjudul}>Jenis Hewan</Text>
      <Picker
        selectedValue={value}
        onValueChange={itemValue => onSelectChange(itemValue)}
        style={{marginLeft: -10}}>
        <Picker.Item label="-- Pilih Jenis Hewan --" />
        <Picker.Item label="Kucing" value="Kucing" />
        <Picker.Item label="Anjing" value="Anjing" />
      </Picker>
      <View style={styles.garis} />
    </View>
  );
};

export default PickerJenisHewan;

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
