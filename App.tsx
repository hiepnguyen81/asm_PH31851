/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenTrangChu from './src/screen/ScreenTrangChu';
import ScreenSetting from './src/screen/ScreenSetting';
import SettingPersonalDetails from './src/screen/SettingPersonalDetails';
import ScreenManHinhChao from './src/screen/ScreenManHinhChao';
import ScreenDangNhap from './src/screen/ScreenDangNhap';
import ScreenDangKi from './src/screen/ScreenDangKi';
import NoteScreen from './src/screen/NoteScreen';
import GratitudeScreen from './src/screen/GratitudeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: '#0C0F14',
          tabBarActiveTintColor: '#D17842', // Màu sắc của tab khi nó được chọn
          tabBarInactiveTintColor: 'gray', // Màu sắc của tab khi nó không được chọn
          tabBarLabelStyle: {
            fontSize: 14, // Kích thước văn bản của tab
            fontWeight: 'bold', // Độ đậm của văn bản của tab
          },
          tabBarStyle: {
            backgroundColor: '#0C0F14', // Màu nền của tab bar
            borderTopColor: 'transparent', // Màu của viền phía trên tab bar
          },
        }}>
        <Tab.Screen name="Trang Chủ" component={ScreenTrangChu} />
        <Tab.Screen name="Lời biết ơn" component={NoteScreen} />
        <Tab.Screen name="Cài đặt" component={SettingStack} />
      </Tab.Navigator>
    );
  };

  const SettingStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Settings" component={ScreenSetting} />
        <Stack.Screen name="Profile" component={SettingPersonalDetails} />
        <Stack.Screen name="GratitudeScreen" component={GratitudeScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={ScreenManHinhChao} />
        <Stack.Screen name="ScreenDangNhap" component={ScreenDangNhap} />
        <Stack.Screen name="DangKi" component={ScreenDangKi} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
