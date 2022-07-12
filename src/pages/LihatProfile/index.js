import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap, Header, Input} from '../../components';
import {colors, fonts, getData} from '../../utils';

const LihatProfile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState('');
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
      console.log('userProfile :', res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapContent}>
          <TouchableOpacity
            style={styles.editprofiles}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.txtEdit}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity>
              <View style={styles.borderPhoto}>
                <Image
                  source={{uri: userProfile.profile_photo_url}}
                  style={styles.photoContainer}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          <Input judul="Nama Lengkap" disable value={userProfile.name} />
          <Gap height={5} />
          <Input judul="Email" disable value={userProfile.email} />
          <Gap height={5} />
          <Input judul="Alamat" disable value={userProfile.address} />
          <Gap height={5} />
          <Input judul="Kota" disable value={userProfile.city} />
          <Gap height={5} />
          <Input
            judul="No. Handphone"
            keyboardType="numeric"
            disable
            value={userProfile.phoneNumber}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LihatProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapContent: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  avatar: {
    height: 112,
    width: 112,
    borderRadius: 112 / 2,
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputs: {
    padding: 10,
    backgroundColor: '#000',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  editprofiles: {
    flex: 1,
    alignItems: 'flex-end',
  },
  txtEdit: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.primary,
  },
});
