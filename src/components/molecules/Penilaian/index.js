import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Penilaian = () => {
  return (
    <View style={styles.wrapPenilaian}>
      <View>
        <Text style={styles.TxtSub}>Kerapian</Text>
      </View>
      <View>
        <Text style={styles.TxtSub}>:</Text>
      </View>
      <View style={styles.nilai}>
        <Text style={styles.TxtSub}>Baik</Text>
      </View>
    </View>
  );
};

export default Penilaian;

const styles = StyleSheet.create({
  wrapPenilaian: {
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TxtSub: {
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    fontSize: 14,
  },
  nilai: {
    marginRight: 20,
  },
});
