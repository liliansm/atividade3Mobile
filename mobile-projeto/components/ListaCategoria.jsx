import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const categories = [
  { name: 'Consultas', icon: 'user-md' },
  { name: 'Dentista', icon: 'tooth' },
  { name: 'Cardiologista', icon: 'heartbeat' },
  { name: 'Hospital', icon: 'hospital' },
  { name: 'Emergencia', icon: 'ambulance' },
  { name: 'Laboratorio', icon: 'flask' },
];

export default function ListaCategoria() {
  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <Text style={styles.title}>Categorias</Text>
        <Text style={styles.title}>Mostrar Tudo</Text>
      </View>
      <View style={styles.grid}>
        {categories.map((cat, index) => (
          <View key={index} style={styles.item}>
            <Icon type="font-awesome-5" name={cat.icon} size={24} color="#5A60EA" />
            <Text style={styles.label}>{cat.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     padding: 20 
    },
  textos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between' 
  },
  title: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 10 
    },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
    },
  item: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  label: { marginTop: 5, fontSize: 12 },
});
