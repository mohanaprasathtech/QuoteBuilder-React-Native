import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Quotes from './src/Quotes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'#5372F0'}/>
      <Quotes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5372F0',
  },
});
