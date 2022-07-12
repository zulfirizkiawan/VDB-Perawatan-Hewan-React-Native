import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const PickerGejala = ({label}) => {
  const [selectedGejala, setSelectedGejala] = useState();
  return (
    <View>
      <Text style={styles.Tjudul}>{label}</Text>
      <Picker
        selectedValue={selectedGejala}
        onValueChange={(itemValue, itemIndex) => setSelectedGejala(itemValue)}
        style={{marginLeft: -10}}>
        <Picker.Item label="Bersin-bersin" value="Bersin-bersin" />
        <Picker.Item label="Demam" value="Demam" />
        <Picker.Item label="Benjolan" value="Benjolan" />
        <Picker.Item label="Pembengkakan" value="Pembengkakan" />
        <Picker.Item
          label="Kehilangan Selera Makan"
          value="Kehilangan Selera Makan"
        />
        <Picker.Item label="Muntah-muntah" value="Muntah-muntah" />
        <Picker.Item label="Bulu Rontok" value="Bulu Rontok" />
        <Picker.Item label="Infeksi Mata" value="Infeksi Mata" />
        <Picker.Item label="Gusi Berdarah" value="Gusi Berdarah" />
        <Picker.Item label="Diare" value="Diare" />
        <Picker.Item
          label="Penurunan Berat Badan"
          value="Penurunan Berat Badan"
        />
        <Picker.Item label="Kejang-kejang" value="Kejang-kejang" />
        <Picker.Item label="Pingsan" value="Pingsan" />
      </Picker>
      <View style={styles.garis} />
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
});
