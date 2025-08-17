import { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
   router.replace('/(auth)/register');
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ef640eff" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#666',
  }
});