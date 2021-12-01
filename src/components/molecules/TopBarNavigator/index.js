import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Absensi from '../../../pages/Absensi';
import Sakit from '../../../pages/Sakit';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Absensi" component={Absensi} />
      <Tab.Screen name="Sakit" component={Sakit} />
    </Tab.Navigator>
  );
};

export default TopBarNavigator;

const styles = StyleSheet.create({});
