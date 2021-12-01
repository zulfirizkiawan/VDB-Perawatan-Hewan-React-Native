import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

const JamTgl = () => {
  return (
    <View style={styles.wrapJamTgl}>
      <View style={styles.wrapJam}>
        <Text style={styles.jamTgl}>Jam</Text>

        <Text style={styles.Jam}>08:02</Text>
      </View>
      <View style={styles.strip} />
      <View style={styles.wrapTgl}>
        <Text style={styles.jamTgl}>Tanggal</Text>

        <Text style={styles.Jam}>27 Nov 2021</Text>
      </View>
    </View>
  );
};

export default JamTgl;

const styles = StyleSheet.create({
  wrapJamTgl: {
    height: 116,
    backgroundColor: '#0D9C57',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jamTgl: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  strip: {
    height: 85,
    width: 1,
    backgroundColor: 'white',
  },
  wrapJam: {
    paddingLeft: 40,
  },
  wrapTgl: {
    paddingRight: 40,
  },
  Jam: {
    fontSize: 30,
    fontFamily: fonts.primary[700],
    color: 'white',
    marginTop: 6,
  },
});
