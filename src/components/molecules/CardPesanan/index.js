import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Status, Gap, Buttons} from '../../atoms';
import {DummyCat} from '../../../assets';
import {colors, fonts} from '../../../utils';
import ItemValue from '../ItemValue';
import Number from '../Number';

const CardPesanan = ({onPress, total, jenisHewan, nama, status, onCancel}) => {
  return (
    <View>
      {status === 'PENDING' ? (
        <TouchableOpacity style={styles.content} onPress={onPress}>
          <ItemValue
            label="Status"
            value={status}
            valueColor={
              status === 'DIBATALKAN'
                ? '#D9435E'
                : status === 'SELESAI'
                ? '#1ABC9C'
                : '#F1A852'
            }
          />
          <Gap height={5} />
          <View style={styles.garis} />
          <Gap height={10} />
          <View style={styles.wrapContent}>
            <Image source={DummyCat} style={styles.img} />
            <Gap width={10} />
            <View style={styles.wrapStatus}>
              <View style={styles.flex}>
                <Text style={styles.txt}>Nama Pemilik</Text>
                <Text style={styles.txtHasil}>{nama}</Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.txt}>Jenis Hewan</Text>
                <Text style={styles.txtHasil}>{jenisHewan}</Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.txt}>Total</Text>
                <Number number={total} style={styles.txtHasil} />
              </View>
            </View>
          </View>
          {/* //-----// */}
          <View>
            <Gap height={10} />
            <View style={styles.garis} />
            <TouchableOpacity style={styles.BtnLogin} onPress={onCancel}>
              <Text style={styles.TxtLogin}>Batalkan</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.content} onPress={onPress}>
          <ItemValue
            label="Status"
            value={status}
            valueColor={
              status === 'DIBATALKAN'
                ? '#D9435E'
                : status === 'SELESAI'
                ? '#1ABC9C'
                : '#F1A852'
            }
          />
          <Gap height={5} />
          <View style={styles.garis} />
          <Gap height={10} />
          <View style={styles.wrapContent}>
            <Image source={DummyCat} style={styles.img} />
            <Gap width={10} />
            <View style={styles.wrapStatus}>
              <View style={styles.flex}>
                <Text style={styles.txt}>Nama Pemilik</Text>
                <Text style={styles.txtHasil}>{nama}</Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.txt}>Jenis Hewan</Text>
                <Text style={styles.txtHasil}>{jenisHewan}</Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.txt}>Total</Text>
                <Number number={total} style={styles.txtHasil} />
              </View>
            </View>
          </View>
          {/* //-----// */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardPesanan;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.Bg.six,
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  wrapContent: {
    flexDirection: 'row',
  },
  img: {
    width: 90,
    height: 110,
    borderRadius: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  txt: {
    fontFamily: fonts.primary[400],
    fontSize: 13,
    color: colors.text.for,
  },
  txtHasil: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
  },
  wrapStatus: {
    flex: 1,
    marginTop: -5,
  },
  garis: {
    height: 0.7,
    backgroundColor: colors.Bg.five,
  },
  BtnLogin: {
    backgroundColor: colors.primary,
    paddingVertical: 7,
    borderRadius: 30,
    width: '45%',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  TxtLogin: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
});
