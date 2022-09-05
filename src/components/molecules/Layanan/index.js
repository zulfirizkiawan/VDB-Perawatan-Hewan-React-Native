import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';
import {ILDr, ILGrooming, ILPenitipan} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Layanan = ({category, onPress, jmlPesanan, listPesanan}) => {
  const Icon = () => {
    if (category === 'Grooming') {
      return <ILGrooming />;
    }
    if (category === 'Penitipan') {
      return <ILPenitipan />;
    }
    if (category === 'Praktik') {
      return <ILDr />;
    }
    return <ILGrooming />;
  };

  return (
    <View>
      {jmlPesanan < 1 ? (
        <TouchableOpacity style={styles.wrapLayanan} onPress={onPress}>
          <Gap height={2} />
          <Icon />
          <Text style={styles.lblLayanan}>{category}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.wrapLayanan} onPress={onPress}>
          <Gap height={2} />
          <Icon />
          <Text style={styles.lblLayanan}>{category}</Text>
          <View style={styles.listOrder}>
            <Text style={styles.listPesanan}> {jmlPesanan} </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  wrapLayanan: {
    alignItems: 'center',
    backgroundColor: colors.Bg.six,
    height: 95,
    width: 95,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  lblLayanan: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    marginTop: 10,
  },
  listOrder: {
    position: 'absolute',
    right: -4,
    top: -4,
    borderRadius: 25,
    height: 25,
    width: 25,
    backgroundColor: '#478aed',
    justifyContent: 'center',
  },
  listPesanan: {
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.primary[400],
    marginTop: 1,
    fontSize: 14,
  },
});
