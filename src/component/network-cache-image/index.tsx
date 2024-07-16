import FastImage, {ImageStyle, ResizeMode} from 'react-native-fast-image';
import {ActivityIndicator, StyleProp, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {color, ms} from '../../themes';

interface Props {
  url: string;
  width: number;
  height: number;
  resizeMode?: ResizeMode;
  styleImage?: StyleProp<ImageStyle>;
}

const NetworkCacheImage = (props: Props) => {
  const {url, width, height, resizeMode, styleImage} = props;
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const styles = StyleSheet.create({
    wrapper: {
      width,
      height,
      position: 'relative',
    },
    image: {
      width,
      height,
      borderRadius: ms(10),
      objectFit: 'contain',
    },
    error: {
      width,
      height,
      backgroundColor: color.white,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 999,
    },
    loading: {
      width,
      height,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color.white,
    },
  });

  return (
    <View style={styles.wrapper}>
      <FastImage
        style={[styles.image, styleImage]}
        source={{
          uri: url,
        }}
        resizeMode={resizeMode ?? FastImage.resizeMode.cover}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoad={() => {
          setIsError(false);
          setIsLoading(false);
        }}
        onError={() => {
          setIsError(true);
          setIsLoading(false);
        }}
      />
      {isError && (
        <View style={styles.error}>
          <FastImage
            source={require('../../../assets/images/default-image.jpg')}
            style={[styles.image, styleImage]}
          />
        </View>
      )}
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator color={color.primary[400]} />
        </View>
      )}
    </View>
  );
};

export default NetworkCacheImage;
