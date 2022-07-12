import {StyleSheet, Text, View, useWindowDimensions, Alert} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';
import {useState} from 'react';
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      shadowOpacity: 0,
      shadowColor: '#fff',
      borderBottomWidth: 0.8,
      borderBottomColor: '#E3E5E5',
    }}
    tabStyle={{
      width: 'auto',
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: fonts.primary[400],
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
    setVisible(false);
  };

  return (
    <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
      <ItemListMenu
        text="Lihat Profile"
        onPress={() => navigation.navigate('LihatProfile')}
      />
      <ItemListMenu
        text="Pusat Bantuan"
        onPress={() => navigation.navigate('PusatBantuan')}
      />
      <ItemListMenu text="Keluar Akun" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Keluar dari aplikasi</Dialog.Title>
        <Dialog.Description>Apakah Anda Ingin Keluar?</Dialog.Description>
        <Dialog.Button label="Tidak" onPress={handleCancel} color="#4552CB" />
        <Dialog.Button label="Iya" onPress={signOut} color="#4552CB" />
      </Dialog.Container>
    </View>
  );
};

const Riwayat = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
      <ItemListMenu
        text="Grooming"
        onPress={() => navigation.navigate('RiwayatGrooming')}
      />
      <ItemListMenu
        text="Penitipan"
        onPress={() => navigation.navigate('RiwayatPenitipan')}
      />
      <ItemListMenu
        text="Praktik"
        onPress={() => navigation.navigate('RiwayatPraktik')}
      />
    </View>
  );
};

const AkunTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Akun'},
    {key: '2', title: 'Riwayat Pesanan'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: Riwayat,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default AkunTabSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
