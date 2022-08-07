import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Buttons, Gap, Input, Link} from '../../components';
import {signUpAction} from '../../redux/action/auth';
import {setLoading} from '../../redux/action/global';
import {colors, fonts, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setFrom] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    city: '',
    phoneNumber: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signUpAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#4596EA" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#4596EA', '#4552CB', '#1324BA']}
        style={styles.gradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <View style={styles.wrapContent}>
            <Text style={styles.register}>Register</Text>
            <Gap height={10} />
            <Input
              judul="Nama Lengkap"
              value={form.name}
              onChangeText={value => setFrom('name', value)}
            />
            <Gap height={12} />
            <Input
              judul="Alamat Rumah"
              value={form.address}
              onChangeText={value => setFrom('address', value)}
            />
            <Gap height={12} />
            <Input
              judul="No. Hp"
              value={form.phoneNumber}
              onChangeText={value => setFrom('phoneNumber', value)}
            />
            <Gap height={12} />
            <Input
              judul="Kota"
              value={form.city}
              onChangeText={value => setFrom('city', value)}
            />
            <Gap height={12} />
            <Input
              judul="Email"
              value={form.email}
              onChangeText={value => setFrom('email', value)}
            />
            <Gap height={12} />
            <Input
              judul="Kata sandi"
              value={form.password}
              onChangeText={value => setFrom('password', value)}
              secureTextEntry
            />
            <Input
              judul="konfirmasi kata sandi"
              value={form.password_confirmation}
              onChangeText={value => setFrom('password_confirmation', value)}
              secureTextEntry
            />
            <Gap height={25} />
            <Buttons title="Register" onPress={onSubmit} />
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
