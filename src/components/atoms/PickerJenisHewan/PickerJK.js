import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const PickerJK = ({value, onSelectChange}) => {
  const [selectedJenisKelamin, setSelectedJenisKelamin] = useState();
  return (
    <View>
      <Text style={styles.Tjudul}>Jenis Kelamin</Text>
      <Picker
        selectedValue={value}
        onValueChange={itemValue => onSelectChange(itemValue)}
        style={{marginLeft: -10}}>
        <Picker.Item label="-- Pilih Jenis kelamin --" />
        <Picker.Item label="Jantan" value="Jantan" />
        <Picker.Item label="Betina" value="Betina" />
      </Picker>
      <View style={styles.garis} />
    </View>
  );
};

export default PickerJK;

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
