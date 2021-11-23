import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [name, setName] = useState('Richard Shea');
  const [age, setAge] = useState('21');
  const [people, setPeople] = useState([
      {name: 'Fred', id: 1},
      {name: 'Mary', id: 2},
      {name: 'Paul', id: 3},
      {name: 'Kate', id: 4},
      {name: 'Stan', id: 5},
      {name: 'Alice', id: 6},
      {name: 'Tom', id: 7},
      {name: 'Hugo', id: 8},
      {name: 'Charlie', id: 9},
  ]);

  const pressHandler = (id) => {
      console.log(id);
      setPeople((prevPeople) => {
          return prevPeople.filter(person => person.id != id)
      })
  }

  return (
    <View style={styles.container}>
        <FlatList
            key={999998}
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({item}) => (
                <TouchableOpacity onPress={ () => pressHandler(item.id) }>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
        {/*
        <ScrollView>
            {people.map(item => (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
        */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
      marginHorizontal: 10,
      marginTop: 24,
  }
});
