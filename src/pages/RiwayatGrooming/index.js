import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, RiwayatGroomingTabSection} from '../../components';
import {colors, fonts} from '../../utils';

const RiwayatGrooming = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Riwayat Grooming" onPress={() => navigation.goBack('')} />
      <View style={styles.tabContainer}>
        <RiwayatGroomingTabSection />
      </View>
    </View>
  );
};

export default RiwayatGrooming;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {flex: 1},
});
