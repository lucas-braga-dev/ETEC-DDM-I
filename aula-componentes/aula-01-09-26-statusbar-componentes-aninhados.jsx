import { TextInput, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>

      <View>
        // primeiro input
        <View>
          <Text> Insira seu nome: </Text>
          <TextInput placeholder="seu nome aqui"/>
        </View>
      </View>

      <View>
        // segundo input
        <View>
          <Text> Insira seu email: </Text>
          <TextInput placeholder="seu email aqui"/>
        </View>
      </View>

      <StatusBar style="light" />
     
    </View>
  );
}
