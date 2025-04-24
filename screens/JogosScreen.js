
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const dados = [
  {
    id: '1',
    modalidade: 'Futsal Masculino',
    equipes: 'IFTO Araguatins x IFTO Palmas',
    local: 'Ginásio IFTO',
    data: '2025-04-09',
    hora: '10:00',
  },
  {
    id: '2',
    modalidade: 'Vôlei Feminino',
    equipes: 'IFTO Gurupi x IFTO Porto Nacional',
    local: 'Quadra 2',
    data: '2025-04-09',
    hora: '14:00',
  },
  {
    id: '3',
    modalidade: 'Basquete Masculino',
    equipes: 'IFTO Dianópolis x IFTO Araguaína',
    local: 'Quadra 1',
    data: '2025-04-10',
    hora: '09:00',
  },
  {
    id: '4',
    modalidade: 'Handebol Feminino',
    equipes: 'IFTO Porto x IFTO Palmas',
    local: 'Quadra Coberta',
    data: '2025-04-10',
    hora: '11:00',
  },
];

export default function JogosScreen() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    setJogos(dados);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogos do JIFTO</Text>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.modalidade}>
              <MaterialIcons name="emoji-events" size={18} color="#008751" /> {item.modalidade}
            </Text>
            <Text>
              <MaterialIcons name="groups" size={16} color="#333" /> {item.equipes}
            </Text>
            <Text>
              <MaterialIcons name="event" size={16} color="#333" /> {item.data} às {item.hora}
            </Text>
            <Text>
              <MaterialIcons name="location-on" size={16} color="#333" /> {item.local}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#008751',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  modalidade: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#008751',
  },
});
