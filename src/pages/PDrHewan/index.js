import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardPesanan} from '../../components';
import {colors} from '../../utils';

const PDrHewan = () => {
  return (
    <View style={styles.content}>
      <CardPesanan />
    </View>
  );
};

export default PDrHewan;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
});
