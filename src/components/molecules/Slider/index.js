import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILAnjing, ILAnjing2, ILKucing, ILRectangle} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Slider = ({category}) => {
  const Icon = () => {
    if (category === 'Kucing') {
      return (
        <View style={styles.wrapIcon}>
          <ILKucing />
          <Text style={styles.text}>
            Semua jenis layanan untuk hewan peliharaan Anda dalam satu tempat.
          </Text>
        </View>
      );
    }
    if (category === 'Anjing') {
      return (
        <View style={styles.wrapIcon}>
          <ILAnjing />
          <Text style={styles.text}>
            Jaga kesehatan hewan peliharaan anda dengan cara menjaga kebersihan.
          </Text>
        </View>
      );
    }
    if (category === 'Anjing2') {
      return (
        <View style={styles.wrapIcon}>
          <ILAnjing2 />
          <Text style={styles.text}>
            Konsultasikan ke dokter jika ada masalah pada hewan peliharaan anda.
          </Text>
        </View>
      );
    }
    return <ILKucing />;
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={ILRectangle} style={styles.image}>
        <Icon />
      </ImageBackground>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 335,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.primary[600],
    width: 220,
    paddingLeft: 20,
  },
  wrapIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
