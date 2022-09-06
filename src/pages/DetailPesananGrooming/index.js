import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Buttons, Gap, Header, ItemValue, Loading} from '../../components';
import {colors, fonts, getData, showMessage} from '../../utils';
import moment from 'moment';
import Axios from 'axios';
import WebView from 'react-native-webview';

const DetailPesananGrooming = ({navigation, route}) => {
  const itemGrooming = route.params;

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const cancelGrooming = () => {
    {
      const data = {
        status: 'DIBATALKAN',
      };
      console.log('sukses  :', itemGrooming.id);
      getData('token').then(resToken => {
        Axios.post(
          `http://vdb.otwlulus.com/api/grooming/${itemGrooming.id}`,
          data,
          {
            headers: {
              Authorization: resToken.value,
            },
          },
        )
          .then(res => {
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp'}],
            });
            showMessage('Berhasil Dibatalkan', 'success');
          })
          .catch(err => {
            console.log('sukses cancel :', err);
          });
      });
    }
  };

  const Bayar = () => {
    setIsPaymentOpen(true);
  };

  const onNavChange = state => {
    console.log('nav :', state);
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header title="Pembayaran" onPress={() => setIsPaymentOpen(false)} />
        <WebView
          source={{uri: itemGrooming.payment_url}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }

  return (
    <View style={styles.Page}>
      <Header title="Detail Pesanan" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image
            source={{uri: itemGrooming.grooming_photo_path}}
            style={styles.avatar}
          />
          <Gap height={20} />
          <ItemValue
            label="Status"
            value={itemGrooming.status}
            valueColor={
              itemGrooming.status === 'DIBATALKAN'
                ? '#D9435E'
                : itemGrooming.status === 'SELESAI'
                ? '#1ABC9C'
                : '#F1A852'
            }
          />
          <ItemValue
            label="Tanggal Pemesanan "
            value={moment(itemGrooming.created_at * 1000).format(
              'dddd, DD MMM YYYY',
            )}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>informasi Hewan</Text>
          <ItemValue label="Nama Hewan " value={itemGrooming.animal_name} />
          <ItemValue label="Jenis Hewan " value={itemGrooming.animal_type} />
          <ItemValue label="Keturunan" value={itemGrooming.descendants} />
          <ItemValue label="Jenis kelamin" value={itemGrooming.animal_gender} />
          <ItemValue
            label="Paket Grooming"
            value={itemGrooming.packet_grooming}
            valueColor="#4552CB"
          />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{itemGrooming.note}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Pesanan Dari :</Text>
          <ItemValue label="Nama " value={itemGrooming.user.name} />
          <ItemValue label="No. Hp" value={itemGrooming.user.phoneNumber} />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Alamat :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{itemGrooming.user.address}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Pembayaran</Text>
          <Gap height={3} />
          <TouchableOpacity onPress={Bayar}>
            <Text style={styles.txtLink}>{itemGrooming.payment_url}</Text>
          </TouchableOpacity>
          <Gap height={8} />
          <Text>
            Note : Abaikan kalau sudah dibayar jika belum klik link di atas ini
          </Text>
        </View>

        <View style={styles.content}>
          <ItemValue
            label="Subtotal "
            numberRp
            value={itemGrooming.sub_total}
          />
          <ItemValue
            label="Ongkos Antar Jemput"
            numberRp
            value={itemGrooming.shipping_cost}
          />
          <ItemValue
            label="Diskon "
            numberRp
            value={'- ' + itemGrooming.discount}
          />
          <ItemValue
            label="Total "
            numberRp
            value={itemGrooming.total}
            valueColor="#27AE60"
          />
        </View>
        {itemGrooming.status === 'PENDING' ? (
          <View style={styles.content}>
            <Buttons title="Batalkan" onPress={cancelGrooming} />
          </View>
        ) : (
          <View />
        )}
      </ScrollView>
    </View>
  );
};

export default DetailPesananGrooming;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: colors.Bg.six,
  },
  content: {
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 16,
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
    color: colors.text.for,
  },
  txtHasil: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  txtLink: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
    textDecorationLine: 'underline',
  },
  txtTotal: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.five,
  },
  informasiHewan: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    alignSelf: 'center',
  },
});
