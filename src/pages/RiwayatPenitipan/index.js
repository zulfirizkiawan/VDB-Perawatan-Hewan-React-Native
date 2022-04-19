import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, RiwayatPenitipanTabSection} from '../../components';
import {colors, fonts} from '../../utils';

const RiwayatPenitipan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Riwayat Penitipan" onPress={() => navigation.goBack('')} />
      <View style={styles.tabContainer}>
        <RiwayatPenitipanTabSection />
      </View>
    </View>
  );
};

export default RiwayatPenitipan;

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
