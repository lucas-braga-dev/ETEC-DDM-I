import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
      }}>

      { /* cabeçalho  */ }
      <View style={{ flexDirection: 'row' }}>
        <View style={caixas.caixa1}>
          <Text> Caixa 1 </Text>
        </View>

        <View style={caixas.caixa2}>
          <Text> Caixa 2 </Text>
        </View>

        <View style={caixas.caixa3}>
          <Text> Caixa 3 </Text>
        </View>
      </View>

      { /* conteudo  */ }
      <View>

        { /* card 1  */ }
        <View>

          { /* código aqui */ }

        </View>



      </View>

      { /* rodape  */ }
      <View>

      </View>










      
    </View>
  );
}

const caixas = StyleSheet.create({
  caixa1: {
    backgroundColor: 'pink',
  },
  caixa2: {
    backgroundColor: 'purple',
  },
  caixa3: {
    backgroundColor: 'yellow',
  },
});
