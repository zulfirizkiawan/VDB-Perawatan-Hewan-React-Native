import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AbsenMasuk,
  AbsenPulang,
  Absensi,
  Akun,
  Cuti,
  Dashboard,
  EditProfile,
  Kehadiran,
  Login,
  Resign,
  Riwayat,
  Sakit,
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
        name="Riwayat"
        component={Riwayat}
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
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenMasuk"
        component={AbsenMasuk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenPulang"
        component={AbsenPulang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Resign"
        component={Resign}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cuti"
        component={Cuti}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kehadiran"
        component={Kehadiran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Absensi"
        component={Absensi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sakit"
        component={Sakit}
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
