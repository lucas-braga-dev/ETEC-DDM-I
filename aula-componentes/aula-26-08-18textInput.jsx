import { TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text> Insira o e-mail abaixo: </Text>
      <TextInput 
        placeholder='seu e-mail'
        style={{
          borderWidth: 1,
          borderRadius: 3,
          margin: 20,
          padding: 5,
          color: '#a0a0a0'
        }}
      />

      <Text> Insira a senha abaixo: </Text>
      <TextInput 
        placeholder='sua senha'
        secureTextEntry={true}
        style={{
          borderWidth: 1,
          borderRadius: 3,
          margin: 20,
          padding: 5,
          color: '#a0a0a0'
        }}
      />

      <Text> Insira sua idade: </Text>
      <TextInput 
        placeholder='sua idade'
        keyboardType='number-pad'
        style={{
          borderWidth: 1,
          borderRadius: 3,
          margin: 20,
          padding: 5,
          color: '#a0a0a0'
        }}
      />

    </View>
  );
}
