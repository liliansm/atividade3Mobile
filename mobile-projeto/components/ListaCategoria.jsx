import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ListaCategoria() {
  const [categorias, setCategorias] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <Text style={styles.title}>Categorias</Text>
        <Text style={styles.title}>Mostrar Tudo</Text>
      </View>
      <View style={styles.grid}>
        {categorias.map((doc) => (
          <View key={doc.id} style={styles.item}>
            <Icon type="font-awesome-5" name={doc.icon} size={24} color="#5A60EA" />
            <Text style={styles.label}>{doc.name}</Text>
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
  label: { 
    marginTop: 5, 
    fontSize: 12 
  },
});