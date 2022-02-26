import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, Input, TotalPesan, UploadGambar} from '../../components';
import {colors, fonts} from '../../utils';
import {Picker} from '@react-native-picker/picker';

const DrHewan = ({navigation}) => {
  const [JenisHewan, setJenisHewan] = useState('Kucing');
  const [JenisKelamin, setJenisKelamin] = useState('Jantan');

  return (
    <View style={styles.page}>
      <Header title="Dr Hewan" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <UploadGambar />
          <Gap height={20} />
          <Text style={styles.informasiHewan}>Informasi Hewan</Text>
          <Gap height={10} />
          <Input judul="Nama Hewan" />
          <Gap height={15} />
          <View>
            <Text style={styles.Judul}>Jenis Hewan</Text>
            <View style={styles.wrapPicker}>
              <Picker
                style={styles.pickers}
                selectedValue={JenisHewan}
                onValueChange={itemValue => setJenisHewan(itemValue)}>
                <Picker.Item label="Kucing" value="Kucing" />
                <Picker.Item label="Anjing" value="Anjing" />
              </Picker>
            </View>
          </View>
          <Gap height={15} />
          <Input judul="Keturunan" />
          <Gap height={15} />
          <View>
            <Text style={styles.Judul}>Jenis Kelamin</Text>
            <View style={styles.wrapPicker}>
              <Picker
                style={styles.pickers}
                selectedValue={JenisKelamin}
                onValueChange={itemValue => setJenisKelamin(itemValue)}>
                <Picker.Item label="Jantan" value="Jantan" />
                <Picker.Item label="Betina" value="Betina" />
              </Picker>
            </View>
          </View>
          <Gap height={15} />
          <View>
            <Text style={styles.Judul}>Gejala Hewan</Text>
            <View style={styles.wrapPicker}>
              <Picker
                style={styles.pickers}
                selectedValue={JenisKelamin}
                onValueChange={itemValue => setJenisKelamin(itemValue)}>
                <Picker.Item label="Jantan" value="Jantan" />
                <Picker.Item label="Betina" value="Betina" />
              </Picker>
            </View>
          </View>
          <Gap height={15} />
          <View>
            <Text style={styles.Judul}>Gejala Hewan ke 2 (jika ada)</Text>
            <View style={styles.wrapPicker}>
              <Picker
                style={styles.pickers}
                selectedValue={JenisKelamin}
                onValueChange={itemValue => setJenisKelamin(itemValue)}>
                <Picker.Item label="Jantan" value="Jantan" />
                <Picker.Item label="Betina" value="Betina" />
              </Picker>
            </View>
          </View>
          <Gap height={15} />
          <Input judul="Catatan" />
          <Text style={styles.Note}>
            #Jika ada gejala yang lain, bisa di ketik di catatan
          </Text>
          <Gap height={20} />
          <Text style={styles.informasiHewan}>Dr. Hewan</Text>
          <Gap height={10} />
          <Input judul="Nama Dr. Hewan" disable />
        </View>
        <Gap height={30} />
      </ScrollView>
      <TotalPesan
        namaTotal="Total"
        totalHarga="50.000"
        title="Selanjutnya"
        onPress={() => navigation.navigate('PembayaranDrHewan')}
      />
    </View>
  );
};

export default DrHewan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 15,
  },
  informasiHewan: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  wrapPicker: {
    height: 55,
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
  },
  pickers: {
    flex: 1,
    color: colors.text.primary,
    backgroundColor: colors.Bg.eight,
  },
  Judul: {
    color: colors.text.primary,
    fontSize: 15,
    fontFamily: fonts.primary[500],
  },
  Note: {
    color: colors.text.tree,
    fontSize: 12,
    fontFamily: fonts.primary[400],
  },
});
