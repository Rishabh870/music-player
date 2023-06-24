import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import CustomBtn from './CustomBtn';

const sliderWidth = Dimensions.get('window').width + 10;
const itemWidth = Math.round(sliderWidth * 0.3);

const MAX_TITLE_LENGTH = 12;
const TruncatedText = ({ text, maxLength, style }) => {
    if (text.length > maxLength) {
      const truncatedText = text.slice(0, maxLength) + '...';
      return <Text style={style}>{truncatedText}</Text>;
    }
    return <Text style={style}>{text}</Text>;
  };

const data = [
  {
    id: 1,
    name: 'Back To You Helix Vol 2',
    url: 'https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1',
  },
  {
    id: 2,
    name: 'slide 2',
    url: 'https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1',
  },
  {
    id: 3,
    name: 'slide 3',
    url: 'https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1',
  },
  {
    id: 4,
    name: 'slide 4',
    url: 'https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1',
  },
];

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    alignItems: 'flex-start',
  },
  itemContainer: {
    borderRadius: 5,
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  image: {
    width: 150,
    borderRadius: 5,
    height: 130,
  },
  text:{
    fontWeight:600,
    marginHorizontal: 23,
     marginBottom:10,
  },
  subContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
  },
});

const renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <TruncatedText
              text={item.name}
              maxLength={MAX_TITLE_LENGTH}
              style={[styles.text, styles.truncatedText]}
            />
    </View>
  );
};

const Popular = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text style={styles.text}>Popular Playlist</Text>
      <CustomBtn/>
      </View>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setIndex(index)}
      />
    </View>
  );
};

export default Popular;
