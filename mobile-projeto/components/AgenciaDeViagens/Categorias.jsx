import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const categories = [
  { name: 'Resort', icon: 'umbrella-beach', type: 'font-awesome-5' },
  { name: 'Homestay', icon: 'home', type: 'font-awesome' },
  { name: 'Hotel', icon: 'hotel', type: 'material-icons' },
  { name: 'Lodge', icon: 'mountain', type: 'font-awesome-5' },
  { name: 'Vila', icon: 'villa', type: 'material-icons' },
  { name: 'Apartamento', icon: 'building', type: 'font-awesome' },
  { name: 'Hostel', icon: 'bed', type: 'font-awesome' },
  { name: 'Ver Tudo', icon: 'ellipsis-h', type: 'font-awesome' },
];

export default function Categorias() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categorias</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" type="material-icons" size={24} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.grid}>
        {categories.map((cat, index) => (
          <View key={index} style={styles.categoryItem}>
            <View style={styles.iconContainer}>
              <Icon 
                name={cat.icon} 
                type={cat.type} 
                size={44} 
                color="#fff" 
              />
            </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  menuButton: {
    marginRight: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: '#284703',
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});