import { Button } from '@rneui/base';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 23,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingBottom: 16,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    marginLeft: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  searchBtn: {
    marginLeft: 8,
  },
});

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>
            Hello
            <Text style={styles.text}> Rishu</Text>
          </Text>
          <Text style={styles.para}>Find the best songs you want</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={require('../assets/profile.jpeg')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <SafeAreaView style={styles.search}>
        <TextInput style={styles.input} placeholder='Search Here ...' />
        <TouchableOpacity style={styles.searchBtn}>
          <Icon name='search' size={15} color='black' />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Header;
