import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {color, ms} from '../themes';

interface Props {
  title: string;
  onPress?: () => void;
  content1: string;
  content2?: string;
  content3?: string;
}

const ReminderItem: React.FC<Props> = ({
  title,
  onPress,
  content1,
  content2,
  content3,
}) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Text style={{fontSize: ms(20), color: color.white}}>{title}</Text>
      <Text style={{fontSize: ms(13), color: color.white}}>{content1}</Text>
      <Text style={{fontSize: ms(13), color: color.white}}>{content2}</Text>
      <Text style={{fontSize: ms(13), color: color.white}}>{content3}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: color.backgroundItem,
    borderRadius: ms(40),
    padding: ms(16),
  },
});

export default ReminderItem;
