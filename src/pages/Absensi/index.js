import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardKehadiran, JamTgl} from '../../components';
import {colors} from '../../utils';

const Absensi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <JamTgl />
      <View style={styles.wrapK}>
        <CardKehadiran
          title="Absen Masuk"
          onPress={() => navigation.navigate('AbsenMasuk')}
        />
        <CardKehadiran
          title="Absen Pulang"
          onPress={() => navigation.navigate('AbsenPulang')}
        />
      </View>
    </View>
  );
};

export default Absensi;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  wrapK: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
