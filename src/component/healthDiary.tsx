import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {color, ms} from '../themes';

interface Props {
  title: string;
  onPress?: () => void;
  uri_img: string;
}

const HealthDiary: React.FC<Props> = ({title, onPress, uri_img}) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Text style={{fontSize: ms(20)}}>{title}</Text>
      <Image style={styles.img} source={{uri: uri_img}} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: ms(200),
    height: ms(200),
    backgroundColor: color.backgroundItem,
    borderRadius: ms(40),
    padding: ms(15),
  },
  img: {
    width: ms(50),
    height: ms(50),
    marginTop: ms(10),
  },
});

export default HealthDiary;
