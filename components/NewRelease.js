import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';

const sliderWidth = Dimensions.get('window').width + 10;
const itemWidth = Math.round(sliderWidth * 0.4);

const data = [
  {
    id: 1,
    name: 'slide 1',
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
    paddingTop: 50,
    alignItems: 'flex-start',
  },
  itemContainer: {
    borderRadius: 100,
    alignItems: 'center',
    height: 150,
    backgroundColor: 'lightblue',
    width: 150,
  },
  image: {
    width: 150,
    borderRadius: 100,
    height: 150,
  },
});

const renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );
};

const NewRelease = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={styles.container}>
      <Text>New Releases</Text>
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

export default NewRelease;
