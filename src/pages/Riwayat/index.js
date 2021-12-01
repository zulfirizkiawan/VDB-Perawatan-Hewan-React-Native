import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Layanan} from '../../components';
import {colors, fonts} from '../../utils';

const Riwayat = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.TxtHeader}>Riwayat</Text>
      </View>
      <View style={styles.wrapContentRiwayat}>
        <View style={styles.wrapRiwayat}>
          <Layanan category="Kehadiran" onPress={() => alert('Hallo')} />
          <Layanan category="Cuti" onPress={() => alert('Hallo')} />
          <Layanan category="  Resign  " onPress={() => alert('Hallo')} />
        </View>
      </View>
    </View>
  );
};

export default Riwayat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapRiwayat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapContentRiwayat: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    elevation: 10,
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
