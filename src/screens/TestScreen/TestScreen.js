import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
const Inp = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] =useState('');
  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
      <TextInput style={styles.input} onChangeText={onChangeNumber} value={number}
        placeholder="number"/>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 20,
    borderWidth: 1,
    padding: 15,
  },
});
export default Inp;