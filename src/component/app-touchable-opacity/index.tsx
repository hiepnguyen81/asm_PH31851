import React, {useRef} from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ViewProps,
} from 'react-native';

export type TouchableProps = RNTouchableOpacityProps &
  ViewProps & {
    withDebounce?: boolean;
  };
export function AppTouchableOpacity(props: TouchableProps) {
  const disablePress = useRef(false);

  const onPress = () => {
    // @ts-ignore
    props.onPress && props.onPress();
  };

  const handlePress = () => {
    if (!props.withDebounce) {
      return onPress();
    }
    if (!disablePress.current) {
      onPress();
      disablePress.current = true;
      const timeout = setTimeout(() => {
        disablePress.current = false;
        clearTimeout(timeout);
      }, 500);
    }
  };

  return (
    <RNTouchableOpacity activeOpacity={0.8} {...props} onPress={handlePress}>
      {props.children}
    </RNTouchableOpacity>
  );
}
