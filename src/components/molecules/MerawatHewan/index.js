import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILCard} from '../../../assets';
import {colors, fonts} from '../../../utils';

const MerawatHewan = () => {
  return (
    <TouchableOpacity>
      <ImageBackground source={ILCard} style={styles.wrapMerawat}>
        <Text style={styles.txt}>
          Merawat Hewan Peliharaan dengan Benar di Rumah
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MerawatHewan;

const styles = StyleSheet.create({
  wrapMerawat: {
    height: 199,
    paddingTop: 30,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  txt: {
    width: 160,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
