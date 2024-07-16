import React from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Noop} from 'react-hook-form';
import {S, color, ms} from '../../themes';

interface Props {
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
  secureText?: boolean;
  maxLine?: number;
  onBlur?: Noop;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  multiline?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

const AppInput = (props: Props) => {
  const {
    value,
    placeholder,
    autoFocus = false,
    leftIcon,
    rightIcon,
    secureText,
    maxLine,
    multiline,
    editable,
    keyboardType,
    returnKeyType,
    onBlur,
    onChange,
    onSubmit,
  } = props;

  const styles = StyleSheet.create({
    container: {
      ...S.rowCenter,
      padding: ms(12),
      borderRadius: ms(12),
      borderWidth: ms(1),
      borderColor: 'rgba(103, 114, 148, 0.16)',
      columnGap: ms(8),
    },
    input: {
      ...S.flex1,
      fontFamily: 'Inter-Regular',
      fontSize: ms(16),
      color: '#677294',
      fontWeight: '300',
      marginLeft: leftIcon ? 0 : ms(12),
      padding: ms(4),
    },
  });

  return (
    <View style={styles.container}>
      {leftIcon}
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={color.gray[400]}
        autoFocus={autoFocus}
        autoCorrect={false}
        numberOfLines={maxLine}
        multiline={multiline}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        returnKeyType={returnKeyType}
        textAlignVertical="top"
        onBlur={onBlur}
        onChangeText={e => {
          onChange && onChange(e);
        }}
        onSubmitEditing={e => {
          onSubmit && onSubmit(e.nativeEvent.text);
        }}
      />
      <View style={{marginRight: ms(12)}}>{rightIcon}</View>
    </View>
  );
};

export default AppInput;
