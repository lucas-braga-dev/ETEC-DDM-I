import { Text, View } from 'react-native';

export default function App() {
  return (

      <View style={{ flex:1, backgroundColor: 'blue' }}>

        <View style={{ flex:.1, backgroundColor: 'cyan' }} >

          <Text> UmAplicativoSinistro </Text>
          
        </View>

        <View style={{ flex:.12, backgroundColor: 'purple' }} />

        <View style={{ flex:.68, backgroundColor: 'darkgrey' }} />

        <View style={{ flex:.1, backgroundColor: 'pink' }} />

      </View>

  );
}
