/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {TS, ms} from '../themes';

interface Account {
  id: string;
  mail: string;
  pass: string;
}

const ScreenDangNhap: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const apiUrl = 'https://662609fd052332d5532164eb.mockapi.io/ASM/account';

  const Separator: React.FC<{height: number}> = ({height}) => (
    <View style={{height}} />
  );

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch(apiUrl, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setAccounts(data ?? []);
      })
      .catch(error => console.error('Lỗi:', error));
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor={'#0C0F14'}
      />
      <Image style={styles.logo} source={require('../Image/logoLogin.png')} />
      <Text style={styles.welcomeText}>Welcome to Healthy App</Text>
      <Text style={styles.loginTo}>Đăng nhập để tiếp tục</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="rgba(130, 130, 130, 1)"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Mật khẩu"
        placeholderTextColor="rgba(130, 130, 130, 1)"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Pressable
        style={styles.buttonLogin}
        onPress={() => {
          if (email.length === 0) {
            Alert.alert('Vui lòng nhập địa chỉ email');
            return;
          }
          if (password.length === 0) {
            Alert.alert('Vui lòng nhập mật khẩu');
            return;
          }
          const foundAccount = accounts.find(
            account => account.mail === email && account.pass === password,
          );
          if (foundAccount) {
            navigation.navigate('BottomTabs');
          } else {
            Alert.alert('Sai địa chỉ email hoặc mật khẩu. Vui lòng thử lại.');
          }
        }}>
        <Text style={styles.textLogin}>Đăng nhập</Text>
      </Pressable>
      <Separator height={20} />
      <Text style={styles.dontHaveAccount}>
        Bạn chưa có tài khoản ? Nhấn vào{' '}
        <Text
          style={styles.registerText}
          onPress={() => navigation.push('DangKi')}>
          Đăng kí
        </Text>
      </Text>
    </View>
  );
};

export default ScreenDangNhap;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: '20%',
  },
  welcomeText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '7%',
    color: '#EEEEEE',
    fontWeight: 'bold',
  },
  loginTo: {
    fontFamily: 'Poppins',
    fontSize: 12,
    marginTop: '7%',
    color: '#999',
    marginBottom: '6%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInput: {
    width: '94%',
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#EEEEEE',
    alignSelf: 'center',
    color: 'white',
    paddingLeft: 20,
  },
  buttonLogin: {
    alignSelf: 'center',
    width: '94%',
    height: 48,
    backgroundColor: '#FF6633',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 50,
  },
  textLogin: {
    ...TS.textLgSemiBold,
    color: '#FFFFFF',
    justifyContent: 'center',
    padding: ms(10),
  },
  buttonGoogle: {
    width: '94%',
    height: 48,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  textGoogle: {
    ...TS.textXlSemiBold,
    color: '#000000',
  },
  dontHaveAccount: {
    color: '#EEEEEE',
    alignSelf: 'center',
    fontWeight: 'bold',
    top: ms(200)
  },
  registerText: {
    color: '#D17842',
  },
  imgs: {
    width: 20,
    height: 20,
  },
});
