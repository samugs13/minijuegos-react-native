import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './components/GameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
