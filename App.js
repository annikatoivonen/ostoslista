import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React from 'react';

export default function App() {

  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);

  const add = () => {
    const newData = [...data, {key: text}];
    setData(newData);
    setText('');
  };

  const clearList = () => {
    const clearData = [];
    setData(clearData);
  };

  return (
    <View style={styles.container}>
      <View style={{flex:2,justifyContent:'center', alignItems:'end'}}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}>
      </TextInput>
      </View>
      <View style={styles.button}>
          <Button
            title='ADD'
            onPress={add}
          />
          <Button
            title='CLEAR'
            onPress={clearList}
          />
      </View>
      <View style={{flex:4, alignItems:'start'}}>
      <Text style={styles.header}>Shopping List</Text>
      <FlatList
      data={data}
      renderItem={({item}) =>
      <Text>{item.key}</Text>
      }>
      </FlatList>
      <StatusBar style="auto" />
    
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
  input: {
    borderWidth: 1,
    margin: 12,
    width: 200,
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
  },
  header: {
    fontSize: 20,
    color: 'blue',
  },
});
