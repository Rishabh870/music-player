import { StyleSheet,ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';

const style = StyleSheet.create({
  button: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
  },
});

function Navbar() {
  return (
    <ScrollView stickyHeaderIndices={[1]}>
    <View style={style.Navbar}>
      <View style={style.button}>
        <TouchableOpacity>
          <Icon name='home' size={30} color='black' />
        </TouchableOpacity>
      </View>
      <View style={style.button}>
        <TouchableOpacity>
          <Icon name='search' size={25} color='black' />
        </TouchableOpacity>
      </View>
      <View style={style.button}>
        <TouchableOpacity>
          <Icon name='heart' size={25} color='black' />
        </TouchableOpacity>
      </View>
      <View style={style.button}>
        <TouchableOpacity>
          <Icon name='repeat' size={25} color='black' />
        </TouchableOpacity>
      </View>
      <View style={style.button}>
        <TouchableOpacity>
          <Icons name='library-music' size={30} color='black' />
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

export default Navbar;
