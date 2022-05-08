import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import Title from './src/Components/Title';
import Main from './src/Components/Main';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Title/>
      <StatusBar style="dark" />
      <Main/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 50,
  }
});
