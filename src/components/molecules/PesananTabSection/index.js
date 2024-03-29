import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts, getData, showMessage} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import CardPesanan from '../CardPesanan';
import {Gap} from '../../atoms';
import {useDispatch, useSelector} from 'react-redux';
import {getGrooming, getPraktik, getPenitipan} from '../../../redux/action';
import Axios from 'axios';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#4552CB',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
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

const PesananGrooming = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pesananGrooming} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getGrooming());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getGrooming());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {pesananGrooming.map(itemGrooming => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananGrooming', itemGrooming)
              }
              key={itemGrooming.id}
              nama={itemGrooming.user.name}
              jenisHewan={itemGrooming.animal_type}
              total={itemGrooming.total}
              status={itemGrooming.status}
              images={{uri: itemGrooming.grooming_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananPenitipan = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pesananPenitipan} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPenitipan());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPenitipan());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {pesananPenitipan.map(itemPenitipan => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPenitipan', itemPenitipan)
              }
              key={itemPenitipan.id}
              nama={itemPenitipan.user.name}
              jenisHewan={itemPenitipan.animal_type}
              total={itemPenitipan.total}
              status={itemPenitipan.status}
              images={{uri: itemPenitipan.penitipan_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananPraktik = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pesananPraktik} = useSelector(state => state.pesananReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPraktik());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPraktik());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.contentPage}>
        {pesananPraktik.map(itemPraktik => {
          return (
            <CardPesanan
              onPress={() =>
                navigation.navigate('DetailPesananPraktik', itemPraktik)
              }
              key={itemPraktik.id}
              nama={itemPraktik.user.name}
              jenisHewan={itemPraktik.animal_type}
              total={itemPraktik.total}
              status={itemPraktik.status}
              images={{uri: itemPraktik.praktik_photo_path}}
            />
          );
        })}
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

const PesananTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Grooming'},
    {key: '2', title: 'Penitipan'},
    {key: '3', title: 'Praktik'},
  ]);

  const renderScene = SceneMap({
    1: PesananGrooming,
    2: PesananPenitipan,
    3: PesananPraktik,
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

export default PesananTabSection;

const styles = StyleSheet.create({
  contentPage: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flex: 1,
  },
});
