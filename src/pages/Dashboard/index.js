import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Layanan, ListDokter, MerawatHewan, Slider} from '../../components';
import {getDiskonData, getDokterData} from '../../redux/action/home';
import {colors, fonts, getData} from '../../utils';
import Dialog from 'react-native-dialog';
import {DummyProfile} from '../../assets';

const Dashboard = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});
  const [visible, setVisible] = useState(false);
  const [photo, setPhoto] = useState(DummyProfile);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then(res => {
        setPhoto({uri: res.profile_photo_url});
        setUserProfile(res);
      });
    });
  }, [navigation]);

  const dispatch = useDispatch();
  const {diskon, dokter} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getDiskonData());
    dispatch(getDokterData());
  }, []);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    navigation.navigate('DrHewan');
  };

  const konsultasi = () => {
    {
      dokter.map(itemDokter => {
        setVisible(false);
        navigation.navigate('ProfilDokter', itemDokter);
      });
    }
  };

  return (
    <View style={styles.page}>
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Pemberitahuan</Dialog.Title>
          <Dialog.Description style={styles.descDialog}>
            Jika hewan anda ingin berobat silahkan konsultasikan terlebih dahulu
            kepada dr. hewan untuk mengetahui tindakan yang akan dilakukan.
            Terimakasih
          </Dialog.Description>
          <Dialog.Button label="Tidak" onPress={handleCancel} color="#4552CB" />
          <Dialog.Button
            label="Konsultasi"
            onPress={konsultasi}
            color="#4552CB"
          />
        </Dialog.Container>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profil */}
        <Gap height={20} />
        <View style={styles.wrapProfil}>
          <View>
            <Text style={styles.hallo}>Hallo, Apa kabar ?</Text>
            <Text style={styles.namaUser}>{userProfile.name}</Text>
          </View>
          <Image source={photo} style={styles.avatar} />
        </View>
        {/* Slider pengumuman */}
        {diskon.turn_off === 'yes' ? (
          <View />
        ) : (
          <View style={styles.wrapSlider}>
            <Slider
              key={diskon.id}
              category="Kucing"
              deskripsi={diskon.description}
              diskon={diskon.price_discount}
            />
          </View>
        )}
        <Gap height={20} />
        {/* Layanan */}
        <Text style={styles.Lbl}>Layanan</Text>
        <View style={styles.wrapRiwayat}>
          <Layanan
            category="Grooming"
            onPress={() => navigation.navigate('Grooming')}
          />
          <Layanan
            category="Penitipan"
            onPress={() => navigation.navigate('Penitipan')}
          />
          <Layanan category="Praktik" onPress={showDialog} />
        </View>
        <Gap height={20} />
        {/* List Dokter */}
        <Text style={styles.Lbl}>Konsultasi Dokter</Text>
        <View style={styles.pD}>
          {dokter.map(itemDokter => {
            return (
              <ListDokter
                onPress={() => navigation.navigate('ProfilDokter', itemDokter)}
                gambar={{uri: itemDokter.doctor_photo_path}}
                nama={itemDokter.name}
                key={itemDokter.id}
              />
            );
          })}
        </View>
        <Gap height={20} />
        {/* merawat hewan */}
        <Text style={styles.Lbl}>Cara Merawat Hewan</Text>
        <View style={styles.pD}>
          <MerawatHewan onPress={() => navigation.navigate('Artikel')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  wrapProfil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  hallo: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  namaUser: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.primary,
    marginTop: 2,
  },
  wrapSlider: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  wrapRiwayat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  Lbl: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.primary,
    marginLeft: 15,
  },
  pD: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  descDialog: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
    textAlign: 'justify',
  },
});
