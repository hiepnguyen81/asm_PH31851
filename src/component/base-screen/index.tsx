/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, ReactNode} from 'react';
import {SafeAreaView, StatusBar, View, ViewStyle} from 'react-native';
import {color} from '../../themes';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content' | 'default';
}

export function BaseScreen(props: Props) {
  const {children, style, backgroundColor, barStyle} = props;

  return (
    <Fragment>
      <StatusBar
        barStyle={barStyle ?? 'light-content'}
        backgroundColor={backgroundColor ?? color.backgroundScreen}
      />
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: backgroundColor ?? color.backgroundScreen,
        }}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: color.backgroundScreen}}>
        <View
          style={{flex: 1, backgroundColor: color.backgroundScreen, ...style}}>
          {children}
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
