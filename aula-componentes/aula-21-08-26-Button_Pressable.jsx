import { Image, Pressable, Button, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View>

      <Text> Insira seu nome: </Text>
      <TextInput 
        placeholder='seu nome'
        style={{
          borderWidth: 1,
          borderRadius: 5,
          padding: 5
        }}
      />

      <Button 
        title='já escrevi'
        onPress={ () => { alert("Enviado!") } }
      />

      <Pressable
        onPress={ () => { alert("Agora foi do pressable!") } } 
        
      >

        <Image 
          source={{ uri: "https://cdn.vectorstock.com/i/500p/95/39/young-male-guest-icon-vector-59519539.jpg"}} 
          style={{ 
            width:120,
            height:120
          }}
        />

      </Pressable>

    </View>
  );
}
