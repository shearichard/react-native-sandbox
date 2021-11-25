import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header  from './components/Header';
import TodoItem from './components/TodoItem';
import AddToDo from './components/AddToDo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy tea', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler  = (key) => {
      setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.key != key);
      })
  }
  //{text: txt, key: Math.random().toString() },
  const buttonHandler = (txt) => {
      setTodos((prevTodos) => {
        return [
          { text: txt, key: Math.random().toString() },
          ...prevTodos
        ];
      })
  }

  return (
    <View style={styles.container}>
      <Header />
      {/* header */}
      <View style={styles.content}>
      {/* Todo form */}
        <AddToDo buttonHandler={buttonHandler} />
        <View style={styles.list}>
          <FlatList 
						data={todos}
						renderItem={({ item }) => (
                            <TodoItem item={item}  pressHandler={pressHandler} />
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
