import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Gap, Header, Input, Status} from '../../components';
import {colors, fonts} from '../../utils';

const DetailPesanan = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Header title="Detail Pesanan" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Content}>
          <Image source={DummyProfile} style={styles.avatar} />
          <Gap height={20} />
          <View style={styles.flex}>
            <Text style={styles.txt}>Status</Text>
            <Status />
          </View>
          <View style={styles.flex}>
            <Text style={styles.txt}>Tanggal Pemesanan</Text>
            <Text style={styles.txtHasil}>18 Okt 2021</Text>
          </View>
          <View style={styles.garis} />
          <Gap height={10} />
          <Text style={styles.informasiHewan}>Informasi Pengguna</Text>
          <Gap height={5} />
          <Input judul="Nama " disable />
          <Gap height={15} />
          <Input judul="No. Telepon " disable />
          <Gap height={15} />
          <Gap height={10} />
          <Text style={styles.informasiHewan}>Informasi Hewan</Text>
          <Gap height={5} />
          <Input judul="Nama Hewan " disable />
          <Gap height={15} />
          <Input judul="Jenis Hewan " disable />
          <Gap height={15} />
          <Input judul="Keturunan " disable />
          <Gap height={15} />
          <Input judul="Jenis Kelamin " disable />
          <Gap height={15} />
          <Input judul="Catatan " disable />
          <Gap height={15} />
          <Input judul="Paket " disable />
          <Gap height={10} />
          <Text style={styles.informasiHewan}>Alamat Rumah</Text>
          <Gap height={5} />
          <Input judul="Lokasi " disable />
          <Gap height={10} />
          <Text style={styles.informasiHewan}>Lokasi VDB pet care</Text>
          <Gap height={5} />
          <Input judul="Lokasi " disable />
          <Gap height={10} />
          <View style={styles.flex}>
            <Text style={styles.txt}>Jarak Darimu </Text>
            <Text style={styles.txtHasil}>2,0 KM</Text>
          </View>
          <Gap height={10} />
          <View style={styles.garis} />
          <Gap height={10} />
          <Input judul="Metode Pembayaran " disable />
          <Gap height={10} />
          <View style={styles.flex}>
            <Text style={styles.txt}>Subtotal</Text>
            <Text style={styles.txtHasil}>Rp. 50.000</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.txt}>Ongkos Kirim</Text>
            <Text style={styles.txtHasil}>5.000</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.txt}>Total</Text>
            <Text style={styles.txtHasil}>Rp. 55.000</Text>
          </View>
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default DetailPesanan;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Content: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  txt: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
  txtHasil: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  garis: {
    height: 0.7,
    backgroundColor: colors.Bg.five,
  },
  informasiHewan: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
});
