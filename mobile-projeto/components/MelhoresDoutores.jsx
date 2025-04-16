import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-elements';

const doutores = [
  {
    nome: 'dr. Olivia Wilson',
    especialidade: 'Consultant - Physiotherapy',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    nome: 'dr. Jonathan Patterson',
    especialidade: 'Consultant - Internal Medicine',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
];

export default function MelhoresDoutores() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Melhores Doutores</Text>
      {doutores.map((doc, i) => (
        <View key={i} style={styles.card}>
          <Image source={{ uri: doc.avatar }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.nome}>{doc.nome}</Text>
            <Text style={styles.especialidade}>{doc.especialidade}</Text>
            <Rating imageSize={14} readonly startingValue={2} style={{ alignSelf: 'flex-start' }} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    marginBottom: 10 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  avatar: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 15 },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold' },
  role: { 
    fontSize: 13, 
    color: 'gray' },
});
