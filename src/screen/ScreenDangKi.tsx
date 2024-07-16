/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Alert,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { ms } from '../themes';

const ScreenDangKi = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [RePass, setRePass] = useState('');
  const apiUrl = 'https://662609fd052332d5532164eb.mockapi.io/ASM/account';

  return (
    <View>
      <View
        style={{
          backgroundColor: '#0C0F14',
          width: '100%',
          height: '100%',
        }}>
        <View>
          <StatusBar
            barStyle="light-content"
            animated={true}
            backgroundColor={'#0C0F14'}
          />
          <Image
            style={{
              height: 150,
              width: 150,
              alignSelf: 'center',
              marginTop: '20%',
            }}
            source={require('../Image/logoLogin.png')}
          />
          <Text style={styles.welcometext}>Welcome to Healthy APP</Text>
          <Text style={styles.loginTo}>Đăng kí để tiếp tục</Text>
          <TextInput
            style={styles.Textinput}
            value={name}
            placeholder="Tên tài khoản"
            placeholderTextColor="rgba(130, 130, 130, 1)"
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.Textinput}
            value={email}
            placeholder="Email"
            placeholderTextColor="rgba(130, 130, 130, 1)"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.Textinput}
            value={Pass}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            placeholderTextColor="rgba(130, 130, 130, 1)"
            onChangeText={text => setPass(text)}
          />
          <TextInput
            style={styles.Textinput}
            value={RePass}
            onChangeText={text => setRePass(text)}
            placeholder="Nhập Lại mật khẩu"
            secureTextEntry
            placeholderTextColor="rgba(130, 130, 130, 1)"
          />
          <Pressable style={styles.buttonLogin}>
            <Text
              style={styles.TextLogin}
              onPress={() => {
                if (name.length === 0) {
                  Alert.alert('Vui lòng nhập tên');
                  return;
                }
                if (email.length === 0) {
                  Alert.alert('Vui lòng nhập địa chỉ email');
                  return;
                }
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                  Alert.alert('Địa chỉ email không đúng định dạng');
                  return;
                }
                if (Pass.length === 0) {
                  Alert.alert('Vui lòng nhập mật khẩu');
                  return;
                }
                fetch(apiUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: name,
                    mail: email,
                    pass: Pass,
                  }),
                })
                  .then(response => response.json())
                  .then(data => {
                    Alert.alert('Đăng ký thành công');
                    navigation.navigate('ScreenDangNhap');
                  })
                  .catch(error => {
                    Alert.alert('Đã có lỗi xảy ra. Vui lòng thử lại sau');
                  });
              }}>
              Đăng kí
            </Text>
          </Pressable>
          <Text style={styles.haveacc}>
            Bạn đã có tài khoản? nhấn để{' '}
            <Text
              style={{color: '#D17842'}}
              onPress={() => {
                navigation.push('ScreenDangNhap');
              }}>
              Đăng nhập
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScreenDangKi;

const styles = StyleSheet.create({
  imgs: {
    width: 15,
    height: 15,
    marginLeft: 20,
  },
  image: {
    width: 142,
    height: 142,
    marginLeft: 120,
    marginTop: 50,
  },
  welcometext: {
    fontFamily: 'Popins',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '7%',
    color: '#EEEEEE',
    fontWeight: 'bold',
  },
  loginTo: {
    fontFamily: 'Popins',
    fontSize: 13,
    marginTop: '7%',
    color: '#999',
    marginBottom: '6%',
    textAlign: 'center',
  },
  Textinput: {
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
  EmailPass: {
    marginLeft: 50,
    color: '#888',
  },
  buttonLogin: {
    alignSelf: 'center',
    width: '94%',
    backgroundColor: '#FF6633',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 50,
    padding: ms(18),
  },
  TextLogin: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins',
    textAlign: 'center',
    justifyContent:'center',
  },
  haveacc: {
    color: '#EEEEEE',
    marginTop: ms(20),
    alignSelf: 'center',
  },
  tipStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 10,
    width: 300,
  },
});
