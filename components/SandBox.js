import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {

  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#ddd',
  },
  boxOne: {
    flex: 5,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 20,
    //alignSelf: 'flex-end',
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 40,
    //alignSelf: 'flex-start',
  }
});
