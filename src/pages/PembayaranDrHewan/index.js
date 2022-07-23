import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Header, ItemValue, Loading, TotalPesan} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {getDiskonData, getDokterData} from '../../redux/action/home';
import axios from 'axios';
import WebView from 'react-native-webview';

const PembayaranDrHewan = ({navigation, total, sub_total, sub1, sub2}) => {
  const [userProfile, setUserProfile] = useState({});
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const dispatch = useDispatch();
  const {praktik} = useSelector(state => state.transactionReducer);
  const {diskon, dokter} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getDiskonData());
  }, []);

  useEffect(() => {
    dispatch(getDokterData());
  }, []);

  const shipping_cost = 12000;

  if (praktik.first_symptom === 'Tidak ada') {
    sub1 = 0;
  }
  if (praktik.first_symptom === 'Pemeriksaan dan pengobatan') {
    sub1 = 55000;
  }
  if (praktik.first_symptom === 'Steril kucing') {
    sub1 = 350000;
  }
  if (praktik.first_symptom === 'Steril anjing') {
    sub1 = 2000000;
  }
  if (praktik.first_symptom === 'Suntik Jamur kucing') {
    sub1 = 130000;
  }
  if (praktik.first_symptom === 'Suntik rabies kucing') {
    sub1 = 130000;
  }
  if (praktik.first_symptom === 'Melahirkan') {
    sub1 = 400000;
  }
  if (praktik.first_symptom === 'Operasi hernia') {
    sub1 = 700000;
  }
  if (praktik.first_symptom === 'Diagnosa Kebuntingan') {
    sub1 = 70000;
  }
  if (praktik.first_symptom === 'Operasi Caesar') {
    sub1 = 3000000;
  }
  if (praktik.first_symptom === 'Pemeriksaan reproduksi (USG)') {
    sub1 = 120000;
  }
  if (praktik.first_symptom === 'Operasi Mata') {
    sub1 = 350000;
  }
  if (praktik.first_symptom === 'Operasi Saluran Pencernaan') {
    sub1 = 300000;
  }
  if (praktik.first_symptom === 'Jahit Luka') {
    sub1 = 70000;
  }

  if (praktik.second_symptom === 'Tidak ada') {
    sub2 = 0;
  }
  if (praktik.second_symptom === 'Pemeriksaan dan pengobatan') {
    sub2 = 55000;
  }
  if (praktik.second_symptom === 'Steril kucing') {
    sub2 = 350000;
  }
  if (praktik.second_symptom === 'Steril anjing') {
    sub2 = 2000000;
  }
  if (praktik.second_symptom === 'Suntik Jamur kucing') {
    sub2 = 130000;
  }
  if (praktik.second_symptom === 'Suntik rabies kucing') {
    sub2 = 130000;
  }
  if (praktik.second_symptom === 'Melahirkan') {
    sub2 = 400000;
  }
  if (praktik.second_symptom === 'Operasi hernia') {
    sub2 = 700000;
  }
  if (praktik.second_symptom === 'Diagnosa Kebuntingan') {
    sub2 = 70000;
  }
  if (praktik.second_symptom === 'Operasi Caesar') {
    sub2 = 3000000;
  }
  if (praktik.second_symptom === 'Pemeriksaan reproduksi (USG)') {
    sub2 = 120000;
  }
  if (praktik.second_symptom === 'Operasi Mata') {
    sub2 = 350000;
  }
  if (praktik.second_symptom === 'Operasi Saluran Pencernaan') {
    sub2 = 300000;
  }
  if (praktik.second_symptom === 'Jahit Luka') {
    sub2 = 70000;
  }

  sub_total = sub1 + sub2;

  total = sub_total + shipping_cost - diskon.price_discount;

  const onCheckout = () => {
    const data = {
      user_id: userProfile.id,
      animal_name: praktik.animal_name,
      animal_type: praktik.animal_type,
      descendants: praktik.descendants,
      animal_gender: praktik.animal_gender,
      note: praktik.note,
      first_symptom: praktik.first_symptom,
      second_symptom: praktik.second_symptom,
      doctor_id: 1,
      status: 'PENDING',
      sub_total,
      shipping_cost,
      discount: diskon.price_discount,
      total,
    };

    console.log('checkout :', data);
    getData('token').then(resToken => {
      axios
        .post('http://vdb.otwlulus.com/api/checkoutpraktik', data, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then(res => {
          console.log('checkout sukses :', res.data);
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('checkout error :', err);
        });
    });
  };

  const onNavChange = state => {
    // console.log('nav :', state);
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.replace('MainApp', {screen: 'Pesanan'});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="Silahkan selesaikan pembayaran anda"
          onBack={() => setIsPaymentOpen(false)}
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
          <ItemValue label="Nama Hewan " value={praktik.animal_name} />
          <ItemValue label="Jenis Hewan " value={praktik.animal_type} />
          <ItemValue label="Keturunan" value={praktik.descendants} />
          <ItemValue label="Jenis kelamin" value={praktik.animal_gender} />
          <ItemValue
            label="Tindakan Pertama"
            value={praktik.first_symptom}
            valueColor="#4552CB"
          />
          <ItemValue
            label="Tindakan kedua"
            value={praktik.second_symptom}
            valueColor="#4552CB"
          />
          {dokter.map(itemDokter => {
            return (
              <ItemValue
                label="Nama Dr. Hewan"
                value={itemDokter.name}
                key={itemDokter.id}
              />
            );
          })}

          <Gap height={8} />
          <View>
            <Text style={styles.txt}>Catatan :</Text>
            <Gap height={3} />
            <Text style={styles.txtHasil}>{praktik.note}</Text>
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
export default PembayaranDrHewan;

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
