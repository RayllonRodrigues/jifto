
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalendarioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calendário</Text>
      <Text style={styles.texto}>Aqui você verá os jogos organizados por data.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008751',
    marginBottom: 12,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
