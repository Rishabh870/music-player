import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ShadowPropTypesIOS,
} from 'react-native';
import Slider from 'react-native-slider';
import Down from 'react-native-vector-icons/Entypo';
import Fav from 'react-native-vector-icons/FontAwesome';
import Ioni from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  player: {
    marginHorizontal: 23,
    flex: 1,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row', // Set flexDirection to 'row' to arrange the icons horizontally
    justifyContent: 'space-between', // Add this property to create space between the icons
  },
  image: {
    width: 280,
    borderRadius: 500,
    height: 280,
  },
  albumContainer: {
    justifyContent: 'center',
    height: '58%',
  },
  Section1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Section2: {
    flexDirection: 'row',
    paddingVertical: 30,
    width: '100%',
    justifyContent: 'center',
  },
  nameSection: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
  },
  singer: {
    marginTop: 15,
    color: 'grey',
  },
  favSection: {
    marginLeft: -40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  musicSlider: {
    marginTop: -15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  slider: {
    width: '70%',
  },
  track: {
    height: 8,
    borderRadius: 2,
    backgroundColor: 'lightgray', // Customize the progress area color here
  },
  thumb: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: 'red', // Customize the circle color here
  },
  played: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  playerBtn: {
    marginTop: 45,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 70,
    marginHorizontal: 20,
  },
  buttonRow1: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonRow2: {
    width: 55,
    height: 55,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 50,
  },
});

const url =
  'https://e0.pxfuel.com/wallpapers/532/219/desktop-wallpaper-anime-music-sad-rain-anime.jpg';

function Player() {
  const MAX_TITLE_LENGTH = 20; // Maximum number of words for the title
  const MAX_SINGER_LENGTH = 20; // Maximum number of words for the singer

  const TruncatedText = ({ text, maxLength, style }) => {
    if (text.length > maxLength) {
      const truncatedText = text.slice(0, maxLength) + '...';
      return <Text style={style}>{truncatedText}</Text>;
    }
    return <Text style={style}>{text}</Text>;
  };

  const calculateTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };
  const totalDuration = 240; // Assuming total duration is 4 minutes

  const [progress, setProgress] = useState(0);
  const [playedTime, setPlayedTime] = useState(calculateTime(0));

  const handleSliderChange = (value) => {
    // Calculate the progress based on the value
    const calculatedProgress = value;

    // Update the progress state
    setProgress(calculatedProgress);

    // Calculate the played time based on the total duration and progress
    const calculatedPlayedTime = calculateTime(
      (calculatedProgress / 100) * totalDuration
    );

    // Update the played time state
    setPlayedTime(calculatedPlayedTime);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.player}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Down name='chevron-down' size={30} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Down name='dots-three-vertical' size={25} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.albumContainer}>
        <View style={styles.Section1}>
          <Image style={styles.image} source={{ uri: url }} />
        </View>
        <View style={styles.Section2}>
          <View style={styles.nameSection}>
            <TruncatedText
              text='Back To You Helix Vol 2'
              maxLength={MAX_TITLE_LENGTH}
              style={[styles.title, styles.truncatedText]}
            />
            <TruncatedText
              text='Selena Gomez'
              style={[styles.singer, styles.truncatedText]}
              maxLength={MAX_SINGER_LENGTH}
            />
          </View>
          <View style={styles.favSection}>
            <TouchableOpacity onPress={handleFavoritePress}>
              <Fav
                name={isFavorite ? 'heart' : 'heart-o'}
                size={30}
                color={isFavorite ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.musicSlider}>
        <Text style={styles.played}>{playedTime}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={progress}
          onValueChange={handleSliderChange}
          minimumTrackTintColor='red' // Set the progress area color to transparent
          maximumTrackTintColor='transparent' // Set the remaining area color to transparent
          thumbTintColor='transparent' // Set the circle color to transparent
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
        />
        <Text style={styles.played}>{calculateTime(totalDuration)}</Text>
      </View>
      <View style={styles.playerBtn}>
        <TouchableOpacity style={styles.buttonRow1}>
          <View style={styles.buttonContainer}>
            <Ioni name='md-shuffle' size={24} color='black' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow2}>
          <View style={styles.buttonContainer}>
            <Ioni name='play-skip-back' size={20} color='black' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <View style={styles.buttonContainer}>
            <Ioni name='play' size={24} color='black' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow2}>
          <View style={styles.buttonContainer}>
            <Ioni name='play-skip-forward' size={20} color='black' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow1}>
          <View style={styles.buttonContainer}>
            <Ioni name='repeat' size={24} color='black' />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.lyricSection}></View>
    </View>
  );
}

export default Player;
