import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PDrHewan from '../PDrHewan';
import PPenitipan from '../PPenitipan';
import PGrooming from '../PGrooming';

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Grooming" component={PGrooming} />
      <Tab.Screen name="Penitipan" component={PPenitipan} />
      <Tab.Screen name="Dr Hewan" component={PDrHewan} />
    </Tab.Navigator>
  );
};

const Pesanan = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.TxtHeader}>Pesanan</Text>
      </View>
      <TopNav />
    </SafeAreaProvider>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    fontFamily: fonts.primary[700],
  },
});
