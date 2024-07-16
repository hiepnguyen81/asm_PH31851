/* eslint-disable prettier/prettier */
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {TS, color, ms} from '../themes';
import HealthDiary from '../component/healthDiary';
import ReminderItem from '../component/reminderItem';
import {BaseScreen} from '../component/base-screen';

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
    <BaseScreen>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor={'#0C0F14'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Trang chủ</Text>
          <Text style={styles.titleContent}>Nhật ký sức khoẻ</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.itemHealthDiary}>
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
          <Text style={styles.titleContent}>Lời nhắc nhở</Text>
          <ReminderItem
            title="Uống nước đủ mỗi ngày"
            content1="- Hãy nhớ uống ít nhất 8 ly nước mỗi ngày để giữ cho cơ thể bạn luôn đủ nước."
            content2="- Đặt nhắc nhở uống nước mỗi giờ để không bị khô miệng."
          />
          <ReminderItem
            title="Tập thể dục thường xuyên"
            content1="- Dành ít nhất 30 phút mỗi ngày để tập thể dục hoặc đi bộ."
            content2="- Lên lịch tập yoga hoặc thể dục vào mỗi buổi sáng để khởi động ngày mới."
          />
          <ReminderItem
            title="Ăn uống lành mạnh"
            content1="- Ăn ít nhất 5 phần rau củ và trái cây mỗi ngày."
            content2="- Hạn chế ăn đồ ăn nhanh và đồ ngọt, tập trung vào các thực phẩm tươi sống."
          />
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

export default ScreenTrangChu;

const styles = StyleSheet.create({
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
    fontSize: 23,
  },
  itemHealthDiary: {
    columnGap: ms(12),
    flexDirection: 'row',
  },
});
