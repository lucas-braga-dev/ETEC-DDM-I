import { Image, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }} >
    
      <View>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hO7QW27rhvjU1JwqajJ3CGypk7f3yhmk4hXi7mMwMg&s=10' }}
        style={{ width: 120, height: 120, borderRadius: 20 }} />
      </View>

      <View style={{ alignItems: 'center' }} >
        <Text style={{ fontSize: 32, fontWeight: 'bold' }} > AppSinistro </Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 14 }} > Apenas um app demo </Text>
      </View>

      <View>
        <Image source={require('./assets/snack-icon.png')}
         style={{ width: 120, height: 120 }}/>
      </View>

    </View>
  );
}
