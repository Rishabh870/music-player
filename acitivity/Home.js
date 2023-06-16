import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
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
function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{/* Content of your app */}</View>
      <Navbar />
    </View>
  );
}

export default Home;
