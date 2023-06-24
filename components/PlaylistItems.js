import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Fav from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    Box:{
        flex:1,
        marginTop:15,
        flexDirection:'row',
    },
    right: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  left:{
    borderRadius:100,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius:100,
    resizeMode: 'contain', // Adjust the image's aspect ratio
  },
  mid:{
    padding:10,
    flexGrow:2,
  },
  title:{
    fontSize:17,
    fontWeight:600,
  },
  text:{
    fontSize:14,
    fontWeight:400,
  },
  lower_mid:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:15,
  }

});

const MAX_TITLE_LENGTH = 19;
const MAX_TEXT_LENGTH = 15;

const TruncatedText = ({ text, maxLength, style }) => {
    if (text.length > maxLength) {
      const truncatedText = text.slice(0, maxLength) + '...';
      return <Text style={style}>{truncatedText}</Text>;
    }
    return <Text style={style}>{text}</Text>;
  };

const PlayListItem = () => {
   const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <View style={styles.Box}>
        <View style={styles.left}>
            <Image style={styles.image} source={{ uri: 'https://th.bing.com/th/id/OIP.4LXhi2NYeEcebgng0f0JvwHaHa?pid=ImgDet&rs=1' }}/>
        </View>
        <View style={styles.mid} >
          <TruncatedText
              text='Let Me Love You'
              maxLength={MAX_TITLE_LENGTH}
              style={[styles.title, styles.truncatedText]}
            />
          <View style={styles.lower_mid}>
            <TruncatedText
              text='Justin Bieber'
              maxLength={MAX_TEXT_LENGTH}
              style={[styles.text, styles.truncatedText]}
            />
            <Text style={styles.text}>3.4mb</Text>
            </View>
        </View>
        <View style={styles.right}>
            <TouchableOpacity onPress={handleFavoritePress}>
              <Fav
                name={isFavorite ? 'heart' : 'heart-o'}
                size={30}
                color={isFavorite ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default PlayListItem;