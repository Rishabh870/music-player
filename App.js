import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './acitivity/Home';
import Player from './acitivity/Player';
export default function App() {
  return (
    <View style={styles.container}>
      <Player />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
