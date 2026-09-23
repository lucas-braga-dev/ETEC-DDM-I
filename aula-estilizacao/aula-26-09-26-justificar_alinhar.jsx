import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa} > </View>
      <View style={styles.caixa}> </View>
      <View style={styles.caixa}> </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  caixa: {
    margin: 10,
    backgroundColor: 'blue',
    width: 100,
    height: 100
  },
});
