import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Buttons,
  Gap,
  Header,
  Input,
  JamTgl,
  UploadGambar,
} from '../../components';

const AbsenPulang = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Absen Pulang" />
      <Gap height={20} />
      <View style={styles.content}>
        <JamTgl />
      </View>
      <Buttons title="Absen Pulang" />
    </View>
  );
};

export default AbsenPulang;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
});
