import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header  from './components/Header';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy tea', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      {/* header */}
      <View style={styles.content}>
      {/* Todo form */}
        <View style={styles.list}>
          <FlatList 
						data={todos}
						renderItem={({ item }) => (
							<Text>{item.text}</Text>
						)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});
