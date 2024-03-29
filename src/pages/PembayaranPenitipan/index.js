import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, ItemValue, Loading, TotalPesan} from '../../components';
import {getDiskonData} from '../../redux/action';
import {colors, fonts, getData} from '../../utils';

const PembayaranPenitipan = ({navigation, total, sub_total}) => {
  const [userProfile, setUserProfile] = useState({});
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const dispatch = useDispatch();
  const {penitipan} = useSelector(state => state.transactionReducer);
  const {diskon} = useSelector(state => state.homeReducer);
  const {photoReducer} = useSelector(state => state);

  useEffect(() => {
    dispatch(getDiskonData());
  }, []);

  const moment = require('moment');
  const startDate = moment(date).format('YYYY-MM-DD');
  const endDate = moment(penitipan.tanggal_pengembalian).format('YYYY-MM-DD');
  const diffInDays = moment(endDate).diff(moment(startDate), 'days');

  const shipping_cost = 12000;

  if (diffInDays === 1) {
    sub_total = 35000;
  }
  if (diffInDays === 2) {
    sub_total = 70000;
  }
  if (diffInDays === 3) {
    sub_total = 100000;
  }
  if (diffInDays === 4) {
    sub_total = 120000;
  }
  if (diffInDays === 5) {
    sub_total = 120000;
  }
  if (diffInDays === 6) {
    sub_total = 120000;
  }
  if (diffInDays === 7) {
    sub_total = 120000;
  }
  if (diffInDays === 8) {
    sub_total = 120000;
  }
  if (diffInDays === 9) {
    sub_total = 120000;
  }
  if (diffInDays === 10) {
    sub_total = 120000;
  }

  total = sub_total + shipping_cost - diskon.price_discount;

  const onCheckout = () => {
    const formdata = new FormData();
    formdata.append('user_id', userProfile.id);
    formdata.append('animal_name', penitipan.animal_name);
    formdata.append('animal_type', penitipan.animal_type);
    formdata.append('descendants', penitipan.descendants);
    formdata.append('animal_gender', penitipan.animal_gender);
    formdata.append('note', penitipan.note);
    formdata.append(
      'tanggal_pengembalian',
      moment(penitipan.tanggal_pengembalian).format('YYYY-MM-DD'),
    );
    formdata.append('status', 'PENDING');
    formdata.append('sub_total', sub_total);
    formdata.append('shipping_cost', shipping_cost);
    formdata.append('discount', diskon.price_discount);
    formdata.append('total', total);
    formdata.append('image', photoReducer);

    console.log('checkout :', formdata);

    getData('token').then(resToken => {
      fetch('http://vdb.otwlulus.com/api/checkoutpenitipan', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: resToken.value,
        },
        body: formdata,
      })
        .then(response => response.json())
        .then(res => {
          console.log('checkout sukses :', res);
          setIsPaymentOpen(true);
          setPaymentURL(res.data.payment_url);
        })
        .catch(err => {
          console.log('checkout error :', err);
        });
    });
  };

  const onNavChange = state => {
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Pembayaran"
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
          }
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }

  return (
    <View style={styles.Page}>
      <Header title="Ringkasan Pesanan" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>informasi Hewan</Text>
          <ItemValue label="Nama Hewan " value={penitipan.animal_name} />
          <ItemValue label="Jenis Hewan " value={penitipan.animal_type} />
          <ItemValue label="Keturunan" value={penitipan.descendants} />
          <ItemValue label="Jenis kelamin" value={penitipan.animal_gender} />
          <ItemValue
            label="Tgl Penitipan"
            value={moment().format('DD MMM YYYY')}
            valueColor="#4552CB"
          />

          <ItemValue
            label="Tgl Pengembalian"
            value={moment(penitipan.tanggal_pengembalian).format('DD MMM YYYY')}
            valueColor="#4552CB"
          />

          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{penitipan.note}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.informasiHewan}>Pesanan Dari :</Text>
          <ItemValue label="Nama " value={userProfile.name} />
          <ItemValue label="No. Hp" value={userProfile.phoneNumber} />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Alamat :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{userProfile.address}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <ItemValue label="Subtotal " numberRp value={sub_total} />
          <ItemValue
            label="Ongkos Antar Jemput"
            numberRp
            value={shipping_cost}
          />
          {diskon.turn_off === 'yes' ? (
            <ItemValue label="Diskon" numberRp value={0} />
          ) : (
            <View style={styles.wrapSlider}>
              <ItemValue
                label="Diskon"
                numberRp
                value={'-' + diskon.price_discount}
              />
            </View>
          )}
        </View>

        <Gap height={20} />
        <TotalPesan
          namaTotal="Total"
          totalHarga={total}
          title="Pilih Pembayaran"
          onPress={onCheckout}
        />
      </ScrollView>
    </View>
  );
};

export default PembayaranPenitipan;

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
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
});
