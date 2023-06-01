import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <MyButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    text: 'white'
  },
});
