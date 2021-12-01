import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TopBarNavigator} from '../../components';
import {colors} from '../../utils';
import HeaderOnly from '../../components/molecules/Header/HeaderOnly';

const Kehadiran = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <HeaderOnly
        type="header-only"
        title="Kehadiran"
        onPress={() => navigation.goBack()}
      />
      <TopBarNavigator />
    </SafeAreaProvider>
  );
};

export default Kehadiran;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
