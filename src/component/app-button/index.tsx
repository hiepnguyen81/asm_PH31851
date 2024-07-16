import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {TS, color, hs, ms} from '../../themes';
import {AppTouchableOpacity} from '../app-touchable-opacity';

interface ButtonProps {
  title: string;
  customStyleButton?: StyleProp<ViewStyle>;
  customStyleText?: StyleProp<TextStyle>;
  onPress: () => void;
}

export const AppButton = (props: ButtonProps) => {
  const {title, customStyleButton, customStyleText, onPress} = props;

  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: ms(48),
      paddingVertical: hs(10),
      borderRadius: ms(12),
      backgroundColor: color.primary,
    },
    textButton: {
      ...TS.textLgRegular,
      fontWeight: '500',
      alignSelf: 'center',
      color: color.white,
    },
  });

  return (
    <AppTouchableOpacity
      style={[styles.button, customStyleButton]}
      onPress={() => {
        onPress();
      }}>
      <Text style={[styles.textButton, customStyleText]}>{title}</Text>
    </AppTouchableOpacity>
  );
};
