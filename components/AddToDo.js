import React, { useState }  from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddToDo({buttonHandler}) {

  const [text, setText] = useState('')

  const changeHandler = (item) => {
    setText(item)
  }
  const buttonHandlerManager= (text) => {
    //This doesn't work as I would like in that it doesn't
    //set spaces to the storage associated with txt. 
    buttonHandler(text)
    setText('')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo ..'
        onChangeText={ changeHandler }
      />
      <Button onPress={() => buttonHandlerManager(text)} title='add todo' color='coral' />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd' 
  }
});

