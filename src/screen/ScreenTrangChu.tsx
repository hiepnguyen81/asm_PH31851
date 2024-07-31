/* eslint-disable prettier/prettier */
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {TS, color, ms} from '../themes';
import HealthDiary from '../component/healthDiary';
import ReminderItem from '../component/reminderItem';
import {BaseScreen} from '../component/base-screen';
import Music from './PlayMusic/Music';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

enum ReduceMotion {
  System = 'system',
  Always = 'always',
  Never = 'never',
}

interface AppProps {
  width?: number;
}

const ScreenTrangChu = ({width}: AppProps) => {
  const navigation = useNavigation<NavigationProp<any>>();

  // animation
  const sv = useSharedValue(500);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: sv.value}],
    };
  });

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(-500, {
        duration: 10000,
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      }),
      -1, // -1 means it will repeat indefinitely
    );
  }, [sv, width]);

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
          <View style={styles.animationView}>
            <FontAwesomeIcon icon={faRightLong} color={color.backgroundItem} size={24} style={styles.icon}/>
            <Animated.Text style={[animatedStyles, styles.animationText]}>
              Tập thể dục hằng ngày để có 1 sức khoẻ dẻo dai, nâng cao sức lực
            </Animated.Text>
          </View>
          <Text style={styles.titleContent}>Nghe nhạc</Text>
          <Music />
          <Text style={styles.titleContent}>Nhật ký sức khoẻ</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.itemHealthDiary}>
              <HealthDiary
                title="Chỉ số huyết áp"
                uri_img="https://img.icons8.com/?size=100&id=BlKaDTIba9nZ&format=png&color=000000"
              />
              <HealthDiary
                title="Chỉ số đường huyết"
                uri_img="https://img.icons8.com/color/48/diabetes-monitor.png"
              />
              <HealthDiary
                title="Cân nặng & chỉ số BMI"
                uri_img="https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-BMI-dieting-(flat)-flat-andi-nur-abdillah.png"
                onPress={() => navigation.navigate('WeightBMIScreen')}
              />
              <HealthDiary
                title="Nhắc nhở uống nước"
                uri_img="https://img.icons8.com/cotton/64/energy-sport-drink.png"
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
  animationText: {
    ...TS.textBaseBold,
    color: color.white,
    marginHorizontal: ms(10),
    width: ms(800),
    overflow: 'hidden',
  },
  animationView: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  icon: {
    position : 'absolute',
    zIndex: 1,
    backgroundColor: color.backgroundScreen,
    padding: ms(12),
  },
});
