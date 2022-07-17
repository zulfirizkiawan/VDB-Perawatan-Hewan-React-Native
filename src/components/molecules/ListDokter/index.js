import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDokter = ({onPress, gambar, nama}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.wrapList}
      onPress={onPress}>
      <Image source={gambar} style={styles.avatar} />
      <View>
        <Text style={styles.namaDokter}>{nama}</Text>
        <Text style={styles.Profesi}>Dr. Hewan</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListDokter;

const styles = StyleSheet.create({
  wrapList: {
    backgroundColor: colors.Bg.six,
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#F0F0F0',
    padding: 24,
    marginRight: 10,
  },
  namaDokter: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  Profesi: {
    fontFamily: fonts.primary[400],
    fontSize: 13,
    color: colors.secondary,
  },
});
