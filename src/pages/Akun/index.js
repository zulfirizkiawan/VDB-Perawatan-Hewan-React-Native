import React, {useEffect, useState} from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import {AkunTabSection, Gap} from '../../components';
import {colors, fonts, getData} from '../../utils';

const Akun = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.shadow}>
        <View style={styles.container}>
          <Text style={styles.TxtHeader}>Akun</Text>
        </View>
        <View style={styles.wrapProfile}>
          <Image
            source={{uri: userProfile.profile_photo_url}}
            style={styles.avatar}
          />
          <Gap height={24} />
          <Text style={styles.nama}>{userProfile.name}</Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.tabContainer}>
        <AkunTabSection />
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  page: {
    backgroundColor: '#F9F9FD',
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
  TxtEdit: {
    fontSize: 14,
    color: colors.text.MenuActive,
    fontFamily: fonts.primary[500],
    width: 76,
  },
  wrapProfile: {
    alignItems: 'center',
    paddingBottom: 30,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#ABAECA',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 28,
    shadowOpacity: 0.2,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  nama: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
  },
});
