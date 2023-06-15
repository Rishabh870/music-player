import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './acitivity/Header';
import Navbar from './acitivity/Navbar';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{/* Content of your app */}</View>
      <Navbar />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
  },
  content: {
    flex: 1,
    paddingBottom: 50, // Adjust this value to provide enough space for the navbar
  },
});
