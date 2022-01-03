import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, Input, TotalPesan} from '../../components';
import {colors, fonts} from '../../utils';
import MapView, {Marker} from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';

const PembayaranDrHewan = ({navigation}) => {
  const [Pembayaran, setPembayaran] = useState('COD (Bayar di tempat)');
  return (
    <View style={styles.page}>
      <Header title="Pembayaran" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -7.9124451,
            longitude: 112.6408022,
            latitudeDelta: 0.0009,
            longitudeDelta: 0.0009,
          }}>
          <Marker
            coordinate={{
              latitude: -7.912431159618501,
              longitude: 112.64157513281744,
            }}
          />
        </MapView>
        <Gap height={20} />
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Alamat Rumah</Text>
          <Input judul="Lokasi" />
          <Gap height={15} />
          <Text style={styles.informasiHewan}>Lokasi VDB pet care</Text>
          <Input judul="Lokasi" disable />
          <Gap height={15} />
          <View style={styles.wrapJarak}>
            <Text style={styles.txtJarak}>Jarak Darimu</Text>
            <Text style={styles.txtHasilJarak}>2.0 KM</Text>
          </View>
          <Gap height={15} />
          <View style={styles.garis} />
          <Gap height={15} />
          <View style={styles.wrapJarak}>
            <Text style={styles.txtJarak}>Penyakit Hewan</Text>
            <Text style={styles.txtHasilJarak}>Muntah-muntah</Text>
          </View>
          <Gap height={15} />
          <View style={styles.wrapJarak}>
            <Text style={styles.txtJarak}>Penyakit Hewan 2</Text>
            <Text style={styles.txtHasilJarak}>Panas</Text>
          </View>
          <Gap height={15} />
          <View style={styles.wrapJarak}>
            <Text style={styles.txtJarak}>Subtotal</Text>
            <Text style={styles.txtHasilJarak}>Rp. 50.000</Text>
          </View>
          <Gap height={15} />
          <View style={styles.wrapJarak}>
            <Text style={styles.txtJarak}>Ongkos Kirim </Text>
            <Text style={styles.txtHasilJarak}>Rp. 5.000</Text>
          </View>
          <Gap height={15} />
          <View style={styles.garis} />
          <Gap height={15} />
          <Text style={styles.informasiHewan}>Pembayaran</Text>
          <Gap height={10} />
          <View>
            <Text style={styles.Judul}>Metode Pembayaran</Text>
            <View style={styles.wrapPicker}>
              <Picker
                style={styles.pickers}
                selectedValue={Pembayaran}
                onValueChange={itemValue => setPembayaran(itemValue)}>
                <Picker.Item
                  label="COD (Bayar di tempat)"
                  value="COD (Bayar di tempat)"
                />
              </Picker>
            </View>
          </View>
          <Gap height={20} />
        </View>
      </ScrollView>
      <TotalPesan namaTotal="Total Harga" totalHarga="55.000" title="Pesan" />
    </View>
  );
};
export default PembayaranDrHewan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  map: {
    height: 380,
    borderRadius: 15,
  },
  content: {
    paddingHorizontal: 15,
  },
  informasiHewan: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  garis: {
    height: 1,
    backgroundColor: colors.border,
  },
  wrapJarak: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txtJarak: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  txtHasilJarak: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
