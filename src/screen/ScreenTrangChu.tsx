/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {TS, color, ms} from '../themes';
import HealthDiary from '../component/healthDiary';

interface Product {
  id: string;
  img: string;
  name: string;
  info: string;
  price: string;
}

const ScreenTrangChu: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [list, setList] = useState<Product[]>([]);
  const apiUrl = 'http://192.168.31.100:3000/SanPham';

  const getList = () => {
    fetch(apiUrl, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor={'#0C0F14'}
      />
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Trang chủ</Text>
          <Text style={styles.titleContent}>Nhật ký sức khoẻ</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View  style={styles.itemHealthDiary}>
          <HealthDiary
            title="Huyết Áp"
            uri_img="https://img.icons8.com/?size=100&id=BlKaDTIba9nZ&format=png&color=000000"
          />
          <HealthDiary
            title="Đường huyết"
            uri_img="https://img.icons8.com/?size=100&id=BlKaDTIba9nZ&format=png&color=000000"
          />
          <HealthDiary
            title="Cân nặng & chỉ số BMI"
            uri_img="https://img.icons8.com/?size=100&id=BlKaDTIba9nZ&format=png&color=000000"
          />
          <HealthDiary
            title="Nhắc nhở uống nước"
            uri_img="https://img.icons8.com/?size=100&id=BlKaDTIba9nZ&format=png&color=000000"
          />
          </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ScreenTrangChu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    width: '100%',
    height: '100%',
  },
  content: {
    padding: ms(10),
    rowGap: ms(20),
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    width: ms(300),
  },
  titleContent: {
    ...TS.textLgBold,
    color: color.white,
  },
  itemHealthDiary: {
    columnGap: ms(12),
    flexDirection: 'row',
  },
});
