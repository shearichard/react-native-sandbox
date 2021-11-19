import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Richard Shea');
  const [person, setPerson] = useState({name: 'Riccardo', age: 40 });

  const clickHandler = () => {
    setName('Fred');
    setPerson({ name: 'Benito', age: 55 });
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My friend's name is {person.name} and they are {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
