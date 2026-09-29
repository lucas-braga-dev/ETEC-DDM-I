import { Button, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ pontosTimeA , atualizarPontosTimeA ] 
            = useState(0);

  const [ pontosTimeB , atualizarPontosTimeB ] 
            = useState(0);

  return (
    <View>
      <Text> Contador </Text>
      <Text> { pontosTimeA } </Text>
      <Button title="Apertar" 
              onPress={ () => 
              {
                if( pontosTimeA > 0 )
                  atualizarPontosTimeA (pontosTimeA - 1)
              }
            } 
        />
    </View>
  );
}
