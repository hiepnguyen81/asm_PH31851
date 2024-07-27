import TrackPlayer from 'react-native-track-player';
import {playbackService} from './trackPlayerServices';
import {AppRegistry} from 'react-native';
import App from './App'; // Ensure this path is correct
import {name as appName} from './app.json'; // Ensure this path is correct

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);
