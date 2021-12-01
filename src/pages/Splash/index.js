import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import {colors} from '../../utils';
import {ILjejakKanan, ILjejakKiri} from '../../assets';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Login');
  //   }, 3000);
  // }, []);

  return (
    <View style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#456CD7" />
      <ILjejakKanan style={styles.iljkanan} />
      <ILjejakKanan style={styles.iljkanan1} />
      <ILjejakKiri style={styles.iljkiri} />
      <ILjejakKiri style={styles.iljkiri1} />
      <ILjejakKanan style={styles.iljkiri2} />
      <ILjejakKanan style={styles.iljkiri3} />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.Bg.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iljkanan: {
    marginVertical: 8,
    transform: [{rotate: '-10deg'}],
    marginLeft: 50,
  },
  iljkanan1: {
    marginVertical: 8,
    transform: [{rotate: '-10deg'}],
    marginLeft: -10,
  },
  iljkiri: {
    marginVertical: 8,
    transform: [{rotate: '20deg'}],
    marginLeft: 80,
  },
  iljkiri1: {
    marginVertical: 8,
    transform: [{rotate: '20deg'}],
    marginLeft: -30,
  },
  iljkiri2: {
    marginVertical: 8,
    transform: [{rotate: '30deg'}],
    marginLeft: 80,
  },
  iljkiri3: {
    marginVertical: 8,
    transform: [{rotate: '30deg'}],
    marginLeft: -30,
  },
});
