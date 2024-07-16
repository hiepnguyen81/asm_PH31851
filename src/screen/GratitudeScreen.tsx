import {StyleSheet} from 'react-native';
import React from 'react';
import {BaseScreen} from '../component/base-screen';
import {AppNavBar} from '../component/app-nav-bar';

const GratitudeScreen = () => {
  return (
    <BaseScreen>
      <AppNavBar title="Lời biết ơn, cảm ơn" />
    </BaseScreen>
  );
};

export default GratitudeScreen;

const styles = StyleSheet.create({});
