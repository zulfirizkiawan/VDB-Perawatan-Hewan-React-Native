import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Akun,
  Artikel,
  Dashboard,
  DetailPesananGrooming,
  DetailPesananPenitipan,
  DetailPesananPraktik,
  DrHewan,
  EditProfile,
  GetStarted,
  Grooming,
  LihatProfile,
  Login,
  PembayaranDrHewan,
  PembayaranGrooming,
  PembayaranPenitipan,
  Penitipan,
  Pesanan,
  ProfilDokter,
  PusatBantuan,
  Register,
  RiwayatGrooming,
  RiwayatPenitipan,
  RiwayatPraktik,
  Splash,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="  Akun   "
        component={Akun}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LihatProfile"
        component={LihatProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilDokter"
        component={ProfilDokter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Artikel"
        component={Artikel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Grooming"
        component={Grooming}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Penitipan"
        component={Penitipan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrHewan"
        component={DrHewan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PembayaranGrooming"
        component={PembayaranGrooming}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PembayaranPenitipan"
        component={PembayaranPenitipan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PembayaranDrHewan"
        component={PembayaranDrHewan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PusatBantuan"
        component={PusatBantuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesananGrooming"
        component={DetailPesananGrooming}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesananPenitipan"
        component={DetailPesananPenitipan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesananPraktik"
        component={DetailPesananPraktik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatGrooming"
        component={RiwayatGrooming}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatPenitipan"
        component={RiwayatPenitipan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatPraktik"
        component={RiwayatPraktik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
