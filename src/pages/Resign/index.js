import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Buttons, Gap, Header, Input, JamTgl} from '../../components';
import {colors} from '../../utils';

const Resign = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Resign" onPress={() => navigation.goBack()} />
      <View style={styles.Resignn}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapContent}>
            <JamTgl />
            <Gap height={20} />
            <Input judul="Tanggal Masuk Kerja" />
            <Gap height={15} />
            <Input judul="Tanggal Keluar Kerja" />
            <Gap height={15} />
            <Input judul="Alasan Keluar" />
            <Gap height={20} />
          </View>
        </ScrollView>
        <Buttons title="Ajukan Resign" onPress={() => alert('jaj')} />
      </View>
    </View>
  );
};

export default Resign;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapContent: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  Resignn: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
