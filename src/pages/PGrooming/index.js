import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardPesanan} from '../../components';
import {colors} from '../../utils';

const PGrooming = ({navigation}) => {
  return (
    <View style={styles.content}>
      <CardPesanan
        onPress={() => navigation.navigate('DetailPesananGrooming')}
      />
    </View>
  );
};

export default PGrooming;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
});
