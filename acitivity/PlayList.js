import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PlayListItem from '../components/PlaylistItems';


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 50,
        marginHorizontal: 23,
        flexDirection:'column',
    },
    title: {
        fontWeight: '900',
        fontSize: 20,
        marginBottom:20,
    },
});

const PlayList = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Popular PlayList</Text>
        <PlayListItem/>
        <PlayListItem/>
        <PlayListItem/>
        <PlayListItem/>
        <PlayListItem/>
        <PlayListItem/>
        <PlayListItem/>
    </View>
  )
}

export default PlayList;