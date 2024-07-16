/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  Modal,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppButton} from '../component/app-button';
import {TS, color, hs, ms} from '../themes';

const ScreenSetting = () => {
  const navigation = useNavigation();
  const [settings, setSettings] = useState([
    {
      id: 1,
      name: 'Thông tin cá nhân',
      Arrow: '>',
      icon: require('../icons/personal.png'),
    },
    {
      id: 2,
      name: 'Những lời biết ơn, hạnh phúc',
      Arrow: '>',
      icon: require('../icons/history.png'),
    },
    {
      id: 3,
      name: 'Đăng xuất',
      Arrow: '>',
      icon: require('../icons/logout.png'),
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    setShowModal(false);
  };
  const logout = () => {
    navigation.navigate('ScreenDangNhap');
    setShowModal(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handlePress(item.name)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemArrow}>{item.Arrow}</Text>
    </TouchableOpacity>
  );

  const handlePress = name => {
    if (name === 'Đăng xuất') {
      setShowModal(true);
    } else if (name === 'Thông tin cá nhân') {
      navigation.navigate('Profile');
    } else if (name === 'Những lời biết ơn, hạnh phúc') {
      navigation.navigate('GratitudeScreen');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor={'#0C0F14'}
      />
      <SafeAreaView>
        <View
          style={{
            marginBottom: '6%',
            marginTop: '5%',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>
            Cài đặt
          </Text>
        </View>
        <FlatList
          data={settings}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <Modal
          visible={showModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowModal(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Bạn có chắc chắn muốn đăng xuất?
              </Text>
              <View style={styles.modalButtons}>
                <AppButton
                  title="Huỷ"
                  onPress={handleLogout}
                  customStyleButton={{
                    ...styles.buttonModal,
                    backgroundColor: '#ff6632',
                  }}
                  customStyleText={styles.textButton}
                />
                <AppButton
                  title="Đồng ý"
                  onPress={logout}
                  customStyleButton={{
                    ...styles.buttonModal,
                    borderWidth: ms(0.3),
                    backgroundColor: color.white,
                  }}
                  customStyleText={{...styles.textButton, color: color.black}}
                />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    height: '100%',
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: '10%',
    width: '54%',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    width: '100%',
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 15,
    backgroundColor: 'rgba(209, 120, 66, 0.2)',
    borderRadius: 100,
    marginStart: '4%',
  },
  itemArrow: {
    color: 'rgba(174, 174, 174, 1)',
    fontWeight: 'bold',
    fontSize: 19,
    marginStart: '10%',
  },
  button: {
    width: 37,
    backgroundColor: 'rgba(33, 38, 46, 1)',
    height: 37,
    marginLeft: '3%',
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
  },
  modalContent: {
    backgroundColor: 'rgba(12, 15, 20, 1)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection: 'column',
    width: '100%',
    rowGap: ms(10),
  },
  buttonModal: {
    paddingHorizontal: ms(48),
    paddingVertical: hs(10),
    borderRadius: ms(12),
    backgroundColor: color.primaryBlue,
  },
  textButton: {
    ...TS.textLgRegular,
    fontWeight: '500',
    alignSelf: 'center',
    color: color.white,
  },
});

export default ScreenSetting;
