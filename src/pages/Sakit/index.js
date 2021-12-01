import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Buttons, Gap, Input, JamTgl, UploadGambar} from '../../components';
import {colors} from '../../utils';

const Sakit = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <View style={styles.content}>
          <View>
            <UploadGambar style={styles.UG} title="Foto Surat Dokter / Obat" />
            <Gap height={30} />
            <JamTgl />
            <Gap height={20} />
            <Input judul="Keterangan Sakit" />
          </View>
        </View>
        <Gap height={30} />
      </ScrollView>
      <View>
        <Buttons title="Kirim Permohonan" />
      </View>
    </View>
  );
};

export default Sakit;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
});
