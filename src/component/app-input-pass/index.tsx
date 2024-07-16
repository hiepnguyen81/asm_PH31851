import React, {useState} from 'react';
import {
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {S, color, ms} from '../../themes';

interface Props {
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  secureText?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

const AppInputPass = (props: Props) => {
  const {
    value,
    placeholder,
    autoFocus = false,
    secureText,
    returnKeyType,
    onChange,
    onSubmit,
  } = props;

  const [isSecure, setIsSecure] = useState(secureText);
  const toggleSecureText = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={color.gray[400]}
        autoFocus={autoFocus}
        secureTextEntry={isSecure}
        autoCorrect={false}
        returnKeyType={returnKeyType}
        onChangeText={e => {
          onChange && onChange(e);
        }}
        onSubmitEditing={e => {
          onSubmit && onSubmit(e.nativeEvent.text);
        }}
      />
      {secureText && (
        <TouchableOpacity onPress={toggleSecureText} style={styles.icon}>
          <FontAwesomeIcon
            icon={isSecure ? faEye : faEyeSlash}
            size={ms(20)}
            color={color.gray[500]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.rowCenter,
    padding: ms(12),
    borderRadius: ms(12),
    borderWidth: ms(1),
    borderColor: 'rgba(103, 114, 148, 0.16)',
    justifyContent: 'space-around',
    columnGap: ms(8),
  },
  input: {
    ...S.flex1,
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
    color: '#677294',
    fontWeight: '300',
    marginLeft: ms(12),
    padding: ms(4),
  },
  icon: {
    marginRight: ms(12),
  },
});

export default AppInputPass;
