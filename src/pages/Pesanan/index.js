import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Layanan} from '../../components';
import {colors, fonts} from '../../utils';

const Pesanan = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.TxtHeader}>Pesanan</Text>
      </View>
      <View style={styles.wrapContentRiwayat}>
        <View style={styles.wrapRiwayat}>
          <Layanan category="Grooming" onPress={() => alert('Hallo')} />
          <Layanan category="Penitipan" onPress={() => alert('Hallo')} />
          <Layanan category="Dr. Hewan" onPress={() => alert('Hallo')} />
        </View>
      </View>
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapRiwayat: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapContentRiwayat: {
    paddingHorizontal: 20,
    // backgroundColor: '#F9F9FD',
    flex: 1,
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
