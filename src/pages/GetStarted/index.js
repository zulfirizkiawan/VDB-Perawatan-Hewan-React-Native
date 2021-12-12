import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILDog} from '../../assets';
import {Buttons, Gap, Link} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILDog style={styles.ILd} />
        <View style={styles.wrapContent}>
          <Text style={styles.text}>
            Membantu merawat hewan peliharaan anda dengan baik
          </Text>
          <Gap height={20} />
          <Buttons
            title="Register"
            onPress={() => navigation.replace('Register')}
          />
          <Gap height={20} />
          <Link
            isi="Saya sudah punya akun?"
            subIsi="Login"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.Bg.secondary,
    flex: 1,
  },
  ILd: {
    alignSelf: 'flex-end',
    marginTop: 40,
  },
  text: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 24,
    textAlign: 'center',
  },
  wrapContent: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  txtAkun: {
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    fontSize: 14,
    marginRight: 10,
  },
  wrapAkun: {
    flexDirection: 'row',
    marginTop: 30,
  },
  txtLogin: {
    fontFamily: fonts.primary[600],
    color: colors.primary,
    fontSize: 14,
  },
});
