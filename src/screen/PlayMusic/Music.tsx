import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {addTracks, setupPlayer} from './servicePlay';
import {color, ms, TS} from '../../themes';
import {AppTouchableOpacity} from '../../component/app-touchable-opacity';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

function Music() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }
      setIsPlayerReady(isSetup);
    }
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nameSong}>Tên bài hát: Play song</Text>
      <View style={styles.buttonContainer}>
        <AppTouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          <FontAwesomeIcon
            icon={faBackward}
            color={color.backgroundItem}
            size={30}
          />
        </AppTouchableOpacity>
        <AppTouchableOpacity onPress={() => TrackPlayer.play()}>
          <FontAwesomeIcon
            icon={faPlay}
            color={color.backgroundItem}
            size={30}
          />
        </AppTouchableOpacity>
        <AppTouchableOpacity onPress={() => TrackPlayer.pause()}>
          <FontAwesomeIcon
            icon={faPause}
            color={color.backgroundItem}
            size={30}
          />
        </AppTouchableOpacity>
        <AppTouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
          <FontAwesomeIcon
            icon={faForward}
            color={color.backgroundItem}
            size={30}
          />
        </AppTouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: color.backgroundMusic,
    borderRadius: ms(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: ms(12),
  },
  nameSong: {
    ...TS.textBaseBold,
    color: color.white,
    padding: ms(12),
  },
});

export default Music;
