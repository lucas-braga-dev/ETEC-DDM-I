import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={ meu_estilo.corpo_tela }>

      <Text style={ estilo_textos.meu_titulo }>Titulo Supimpa!</Text>

      <Text style={ estilo_textos.paragrafo }>      
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
      </Text>

    </View>
  );
}

const meu_estilo = StyleSheet.create({
  corpo_tela: {
    flex:1, 
    backgroundColor: 'red'
  }
});

const estilo_textos = StyleSheet.create({

  paragrafo: {
    fontSize: 18,
    fontWeight: '200',
    fontStyle: 'italic',
    color: 'lightyellow',
    textAlign: 'right'
  },

  meu_titulo: {
    fontSize: 48,
    fontWeight: '700',
    fontStyle: 'normal',
    color: 'yellow',
    textAlign: 'center'
  }

});
