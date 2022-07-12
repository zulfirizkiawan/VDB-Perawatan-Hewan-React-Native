import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DummyProfile} from '../../assets';
import {Gap, Layanan, ListDokter, MerawatHewan, Slider} from '../../components';
import {colors, fonts, getData} from '../../utils';

const Dashboard = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('token :', res);
      setUserProfile(res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profil */}
        <Gap height={40} />
        <View style={styles.wrapProfil}>
          <View>
            <Text style={styles.hallo}>Hallo, Apa kabar ?</Text>
            <Text style={styles.namaUser}>{userProfile.name}</Text>
          </View>
          <Image
            source={{uri: userProfile.profile_photo_url}}
            style={styles.avatar}
          />
        </View>
        {/* Slider pengumuman */}
        <View style={styles.wrapSlider}>
          <Slider category="Kucing" />
        </View>
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
          <Layanan
            category="Praktik"
            onPress={() => navigation.navigate('DrHewan')}
          />
        </View>
        <Gap height={20} />
        {/* List Dokter */}
        <Text style={styles.Lbl}>Konsultasi Dokter</Text>
        <View style={styles.pD}>
          <ListDokter onPress={() => navigation.navigate('ProfilDokter')} />
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
  wrapPage: {
    paddingHorizontal: 20,
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
    alignItems: 'center',
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
});
