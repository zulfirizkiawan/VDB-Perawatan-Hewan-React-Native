import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICAkun,
  ICAkunAktif,
  ICDashboard,
  ICDashboardAktif,
  ICRiwayat,
  ICRiwayatAktif,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? <ICDashboardAktif /> : <ICDashboard />;
    }
    if (title === 'Riwayat') {
      return active ? <ICRiwayatAktif /> : <ICRiwayat />;
    }
    if (title === '  Akun   ') {
      return active ? <ICAkunAktif /> : <ICAkun />;
    }
    return <ICDashboard />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 12,
    color: active ? colors.text.MenuActive : colors.text.MenuinActive,
    fontFamily: fonts.primary[600],
    marginTop: 3,
  }),
});
