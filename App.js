import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import Home from './acitivity/Home';
import PlayList from './acitivity/PlayList';
export default function App() {
  return (
    <ScrollView ref={ref => this.scrollViewRef = ref}>
    <View style={styles.container}>
      <PlayList />
      <StatusBar style='auto' />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
