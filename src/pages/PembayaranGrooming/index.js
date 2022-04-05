import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, ItemValue, TotalPesan} from '../../components';
import {colors, fonts} from '../../utils';

const PembayaranGrooming = ({
  navigation,
  basic,
  Subtotal,
  total,
  ongkos,
  kutu,
  jamur,
  kombinasi,
}) => {
  ongkos = 10000;

  if ((basic = 'Basic')) {
    Subtotal = 50000;
    total = Subtotal + ongkos;
  }
  if ((kutu = 'Kutu')) {
    Subtotal = 70000;
    total = Subtotal + ongkos;
  }
  if ((jamur = 'Jamur')) {
    Subtotal = 75000;
    total = Subtotal + ongkos;
  }
  if ((kombinasi = 'Kombinasi (Kutu dan Jamur)')) {
    Subtotal = 90000;
    total = Subtotal + ongkos;
  }

  return (
    <View style={styles.Page}>
      <Header title="Ringkasan Pesanan" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>informasi Hewan</Text>
          <ItemValue label="Nama Hewan " value="Bisqi" />
          <ItemValue label="Jenis Hewan " value="Kucing" />
          <ItemValue label="Keturunan" value="Persia" />
          <ItemValue label="Jenis kelamin" value="Betina" />
          <ItemValue
            label="Jenis Grooming"
            value={basic}
            valueColor="#4552CB"
          />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>
              Hati hati ya kak, kucingnya galak
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Pesanan Dari :</Text>
          <ItemValue label="Nama " value="Rizkiawan" />
          <ItemValue label="No. Hp" value="08586756282" />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Alamat :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>
              Purboyo, Purwosekar, Tajinan, Malang
            </Text>
          </View>
        </View>

        <View style={styles.content}>
          <ItemValue label="Subtotal " value={'Rp. ' + Subtotal} />
          <ItemValue label="Ongkos Antar Jemput" value="10.000" />
          <ItemValue label="Diskon " value="- 5.000" />
        </View>

        <Gap height={20} />
        <TotalPesan
          namaTotal="Total"
          totalHarga={total}
          title="Pilih Pembayaran"
        />
      </ScrollView>
    </View>
  );
};

export default PembayaranGrooming;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: colors.Bg.six,
  },

  informasiHewan: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  content: {
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 16,
  },
  txt: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.for,
  },
  txtHasil: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
});
