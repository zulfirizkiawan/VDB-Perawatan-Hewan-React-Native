import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILLOGO, ILTangan} from '../../assets';
import {Gap, Input} from '../../components';
import {fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ILLOGO style={styles.logo} />
      <View style={styles.WrapSelamat}>
        <Text style={styles.TxtSelamat}>Selamat Datang</Text>
        <ILTangan />
      </View>
      <Gap height={20} />
      <Input judul="Email" />
      <Gap height={10} />
      <Input judul="Kata sandi" />
      <Gap height={20} />
      <Text style={styles.lupa}>Lupa Password?</Text>
      <Gap height={40} />
      <TouchableOpacity
        style={styles.BtnLogin}
        onPress={() => navigation.replace('MainApp')}>
        <Text style={styles.TxtLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  WrapSelamat: {
    flexDirection: 'row',
    marginTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TxtSelamat: {
    fontSize: 24,
    fontFamily: fonts.primary[700],
    color: '#334639',
    paddingRight: 10,
  },
  lupa: {
    fontSize: 12,
    color: '#106048',
    textDecorationLine: 'underline',
    fontFamily: fonts.primary[500],
    alignSelf: 'flex-end',
  },
  BtnLogin: {
    backgroundColor: '#0D9C57',
    paddingVertical: 15,
    borderRadius: 30,
  },
  TxtLogin: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.primary[800],
    textAlign: 'center',
  },
});
