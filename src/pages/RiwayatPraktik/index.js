import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, RiwayatPraktikTabSection} from '../../components';
import {colors, fonts} from '../../utils';

const RiwayatPraktik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Riwayat Praktik" onPress={() => navigation.goBack('')} />
      <View style={styles.tabContainer}>
        <RiwayatPraktikTabSection />
      </View>
    </View>
  );
};

export default RiwayatPraktik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  judulPage: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: 20,
  },
  tabContainer: {flex: 1},
});
