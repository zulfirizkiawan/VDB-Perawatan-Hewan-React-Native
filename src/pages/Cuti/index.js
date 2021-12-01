import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Buttons, Gap, Header, Input, JamTgl} from '../../components';
import {colors} from '../../utils';

const Cuti = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Cuti" onPress={() => navigation.goBack()} />
      <View style={styles.Resignn}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapContent}>
            <JamTgl />
            <Gap height={20} />
            <Input judul="Sisa Cuti" />
            <Gap height={15} />
            <Input judul="Tanggal Cuti" />
            <Gap height={15} />
            <Input judul="Akhir Cuti" />
            <Gap height={15} />
            <Input judul="Total Cuti" />
            <Gap height={15} />
            <Input judul="Keterangan Cuti" />
            <Gap height={20} />
          </View>
        </ScrollView>
        <Buttons title="Ajukan Cuti" onPress={() => alert('jaj')} />
      </View>
    </View>
  );
};

export default Cuti;

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
