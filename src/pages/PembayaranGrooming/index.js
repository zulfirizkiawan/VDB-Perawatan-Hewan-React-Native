import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, ItemValue, Loading, TotalPesan} from '../../components';
import {getDiskonData} from '../../redux/action/home';
import {colors, fonts, getData} from '../../utils';

const PembayaranGrooming = ({navigation, total, sub_total}) => {
  const [userProfile, setUserProfile] = useState({});
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const dispatch = useDispatch();
  const {grooming} = useSelector(state => state.transactionReducer);
  const {diskon} = useSelector(state => state.homeReducer);
  const {photoReducer} = useSelector(state => state);

  useEffect(() => {
    dispatch(getDiskonData());
  }, []);

  const shipping_cost = 12000;

  if (grooming.packet_grooming === 'Basic') {
    sub_total = 65000;
  }
  if (grooming.packet_grooming === 'Kutu') {
    sub_total = 165000;
  }
  if (grooming.packet_grooming === 'Jamur') {
    sub_total = 150000;
  }
  if (grooming.packet_grooming === 'Kutu dan Jamur') {
    sub_total = 200000;
  }

  total = sub_total + shipping_cost - diskon.price_discount;

  const onCheckout = () => {
    const formdata = new FormData();
    formdata.append('user_id', userProfile.id);
    formdata.append('animal_name', grooming.animal_name);
    formdata.append('animal_type', grooming.animal_type);
    formdata.append('descendants', grooming.descendants);
    formdata.append('animal_gender', grooming.animal_gender);
    formdata.append('note', grooming.note);
    formdata.append('packet_grooming', grooming.packet_grooming);
    formdata.append('status', 'PENDING');
    formdata.append('sub_total', sub_total);
    formdata.append('shipping_cost', shipping_cost);
    formdata.append('discount', diskon.price_discount);
    formdata.append('total', total);
    formdata.append('image', photoReducer);

    console.log('checkout :', formdata._parts);
    getData('token').then(resToken => {
      fetch('http://vdb.otwlulus.com/api/checkoutgrooming', {
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
    console.log('nav :', state);
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
          <ItemValue label="Nama Hewan " value={grooming.animal_name} />
          <ItemValue label="Jenis Hewan " value={grooming.animal_type} />
          <ItemValue label="Keturunan" value={grooming.descendants} />
          <ItemValue label="Jenis kelamin" value={grooming.animal_gender} />
          <ItemValue
            label="Paket Grooming"
            value={grooming.packet_grooming}
            valueColor="#4552CB"
          />
          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{grooming.note}</Text>
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
          <ItemValue label="Subtotal" numberRp value={sub_total} />
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
      </ScrollView>
      <TotalPesan
        namaTotal="Total"
        totalHarga={total}
        title="Pilih Pembayaran"
        onPress={onCheckout}
      />
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
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
});
