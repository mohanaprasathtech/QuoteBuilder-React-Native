import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import list from './Data';
const Quotes = () => {
  const [index, setIndex] = useState(0);
  const handleChange = () => {
    const max = 9;
    const val = Math.floor(Math.random() * max) + 1;
    setIndex(val);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Quotes for the day</Text>
      <FontAwesome5
        style={{
          marginBottom: '-5%',
        }}
        name="quote-left"
        size={20}
      />

      <Text style={styles.quotes}>{list[index].quotes}</Text>

      <FontAwesome5
        style={{
          textAlign: 'right',
          marginTop: '-9%',
          marginBottom: '7%',
        }}
        name="quote-right"
        size={20}
      />
      <Text style={styles.authorText}>— {list[index].author}</Text>
      <TouchableOpacity onPress={handleChange} style={styles.button}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            padding: 20,
            borderRadius: 50,
            marginTop: '2%',
            borderColor: '#5372F0',
          }}>
          <FontAwesome name="volume-up" size={22} color={'#5372F0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            padding: 20,
            borderRadius: 50,
            marginTop: '2%',
            borderColor: '#5372F0',
          }}>
          <FontAwesome5 name="copy" size={22} color={'#5372F0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            padding: 20,
            borderRadius: 50,
            marginTop: '2%',
            borderColor: '#5372F0',
          }}>
          <FontAwesome name="twitter" size={22} color={'#5372F0'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(90),
    padding: 20,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: '10%',
  },
  quotes: {
    fontSize: 18,
    letterSpacing: 1.1,
    textAlign: 'center',
    color: '#000',
    lineHeight: 28,
    fontWeight: '400',
    marginBottom: '10%',
    marginHorizontal: '7%',
  },
  authorText: {
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#000',
  },
  button: {
    backgroundColor: '#5372F0',
    padding: 20,
    borderRadius: 30,
    marginVertical: '5%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
