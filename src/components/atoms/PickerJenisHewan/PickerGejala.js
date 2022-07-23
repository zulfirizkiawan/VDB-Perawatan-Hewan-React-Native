import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const PickerGejala = ({label, value, onSelectChange, note}) => {
  const [selectedGejala, setSelectedGejala] = useState();
  return (
    <View>
      <Text style={styles.Tjudul}>{label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={itemValue => onSelectChange(itemValue)}
        style={{marginLeft: -10}}>
        <Picker.Item label="-- Pilih Tindakan --" value="Tidak ada" />
        <Picker.Item
          label="Pemeriksaan dan pengobatan"
          value="Pemeriksaan dan pengobatan"
        />
        <Picker.Item label="Steril kucing" value="Steril kucing" />
        <Picker.Item label="Steril anjing" value="Steril anjing" />
        <Picker.Item label="Suntik Jamur kucing" value="Suntik Jamur kucing" />
        <Picker.Item
          label="Suntik rabies kucing"
          value="Suntik rabies kucing"
        />
        <Picker.Item label="Melahirkan" value="Melahirkan" />
        <Picker.Item label="Operasi hernia" value="Operasi hernia" />
        <Picker.Item
          label="Diagnosa Kebuntingan"
          value="Diagnosa Kebuntingan"
        />
        <Picker.Item label="Operasi Caesar" value="Operasi Caesar" />
        <Picker.Item
          label="Pemeriksaan reproduksi (USG)"
          value="Pemeriksaan reproduksi (USG)"
        />
        <Picker.Item label="Operasi Mata" value="Operasi Mata" />
        <Picker.Item
          label="Operasi Saluran Pencernaan"
          value="Operasi Saluran Pencernaan"
        />

        <Picker.Item label="Jahit Luka" value="Jahit Luka" />
      </Picker>
      <View style={styles.garis} />
      <Text style={styles.notes}>{note}</Text>
    </View>
  );
};

export default PickerGejala;

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
  notes: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: fonts.primary[400],
    marginTop: 2,
  },
});
