/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const ScreenManHinhChao = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ScreenDangNhap');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View
      style={{
        backgroundColor: '#0C0F14',
        width: '100%',
        height: '100%',
      }}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor={'#0C0F14'}
      />
      <Image
        style={{width: 200, height: 200, alignSelf: 'center', margin: '70%'}}
        source={require('../Image/logoLogin.png')}
      />
    </View>
  );
};

export default ScreenManHinhChao;
