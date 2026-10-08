import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [nome, atualizarNome] = useState('teste');

  return (
    <View style={styles.container}>

      <Text> Insira seu nome: </Text>

      <TextInput value={nome} onChangeText={atualizarNome} />

      <Text> Olá, {nome}! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
