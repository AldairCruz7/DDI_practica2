import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/components/navigation/RootNavigation';
import { useFonts, Montserrat_300Light, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat'; 

export default function App() {
  
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_300Light,
    Montserrat_700Bold,
    Montserrat_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <RootNavigation />
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
