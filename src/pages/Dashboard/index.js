import React from 'react';
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
import {colors, fonts} from '../../utils';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profil */}
        <Gap height={40} />
        <View style={styles.wrapProfil}>
          <View>
            <Text style={styles.hallo}>Hallo, Apa kabar ?</Text>
            <Text style={styles.namaUser}>Dina Anggun Pertiwi</Text>
          </View>
          <Image source={DummyProfile} style={styles.avatar} />
        </View>
        {/* Slider pengumuman */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapSlider}>
            <Gap width={10} />
            <Slider category="Kucing" />
          </View>
        </ScrollView>
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
            category="Dr. Hewan"
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
    flexDirection: 'row',
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
