import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const CustomBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>See More</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 0,
    marginRight:5,
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
export default CustomBtn;
