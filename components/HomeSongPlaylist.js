import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Resent from './Resent';
import Popular from './Popular';
import NewRelease from './NewRelease';
function HomeSongPlaylist() {
  return <View>
    <NewRelease />
        <Resent/>
        <Popular/>
  </View>;
}

export default HomeSongPlaylist;
