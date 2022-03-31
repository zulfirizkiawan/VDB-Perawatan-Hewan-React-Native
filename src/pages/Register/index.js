import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ILLogin} from '../../assets';
import {Buttons, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#4596EA" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#4596EA', '#4552CB', '#1324BA']}
        style={styles.gradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogin style={styles.Ilimg} />
          <View style={styles.wrapContent}>
            <Text style={styles.register}>Register</Text>
            <Gap height={10} />
            <Input judul="Nama Lengkap" />
            <Gap height={15} />
            <Input judul="Email" />
            <Gap height={15} />
            <Input judul="Kata sandi" />
            <Gap height={25} />
            <Buttons title="Register" />
            <Gap height={20} />
            <View style={styles.wrapLupa}>
              <Link
                isi="Sudah mempunyai akun?"
                subIsi="Login"
                onPress={() => navigation.replace('Login')}
              />
            </View>
          </View>
          <Gap height={15} />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  wrapContent: {
    backgroundColor: colors.Bg.secondary,
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
    borderRadius: 15,
  },
  Ilimg: {
    alignSelf: 'center',
    width: 280,
    height: 280,
  },
  register: {
    fontSize: 30,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  lupa: {
    alignSelf: 'flex-end',
    marginTop: 12,
    fontFamily: fonts.primary[500],
    color: colors.primary,
    fontSize: 14,
  },
  wrapLupa: {
    alignItems: 'center',
  },
});
