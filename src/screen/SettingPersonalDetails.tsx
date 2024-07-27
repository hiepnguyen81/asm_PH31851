/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {S, TS, color, hs, ms} from '../themes';
import {AppButton} from '../component/app-button';
import { BaseScreen } from '../component/base-screen';
import { AppNavBar } from '../component/app-nav-bar';

const SettingPersonalDetails = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Pass, setGioiTinh] = useState('');

  return (
    <BaseScreen>
    <AppNavBar title="Thông tin cá nhân" />
    <View style={styles.container}>
        <View style={{alignItems: 'center'}} />
        <Image
          style={{
            width: 160,
            height: 160,
            alignSelf: 'center',
            marginTop: '7%',
            marginBottom: '15%',
          }}
          source={require('../Image/ava.png')}
        />
        <TextInput
          style={styles.Textinput}
          value={name}
          onChangeText={setName}
          placeholder=" Họ và tên"
          placeholderTextColor="rgba(130, 130, 130, 1)"
        />
        <TextInput
          style={styles.Textinput}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="rgba(130, 130, 130, 1)"
        />
        <TextInput
          style={styles.Textinput}
          value={Pass}
          onChangeText={setGioiTinh}
          placeholder="Giới tính"
          placeholderTextColor="rgba(130, 130, 130, 1)"
        />
        <AppButton
          title="Lưu"
          onPress={() => navigation.goBack()}
          customStyleButton={styles.buttonModal}
          customStyleText={{...styles.textButton, color: color.white}}
        />
    </View>
    </BaseScreen>
  );
};

export default SettingPersonalDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.backgroundScreen,
    height: '100%',
    paddingHorizontal: ms(15),
    ...S.column,
  },
  Textinput: {
    width: '100%',
    height: ms(48),
    borderRadius: ms(10),
    borderWidth: ms(1),
    borderColor: '#EEEEEE',
    alignSelf: 'center',
    color: color.white,
    paddingHorizontal: ms(12),
    marginVertical: ms(15),
  },
  buttonModal: {
    paddingHorizontal: ms(48),
    paddingVertical: hs(10),
    borderRadius: ms(12),
    backgroundColor: color.primary,
    marginVertical: ms(15),
  },
  textButton: {
    ...TS.textLgRegular,
    color: color.white,
  },
});
