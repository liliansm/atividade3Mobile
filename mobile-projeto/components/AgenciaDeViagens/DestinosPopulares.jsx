import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import rio from '../../assets/rio.png';
import cataratas from '../../assets/cataratas.png';
import bomJesus from '../../assets/bomJesus.png';

export default function DestinosPopulares() {
  return (
    <View style={styles.container}>
      <View style={styles.texto}>
        <Text style={styles.title}>Destinos Populares</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" type="material-icons" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={rio} 
          style={styles.avatar} 
          resizeMode="cover"
        />
        <Image 
          source={cataratas} 
          style={styles.avatar} 
          resizeMode="cover"
        />
        <Image 
          source={bomJesus} 
          style={styles.avatar} 
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  texto: {
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
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 90,  
    height: 90, 
    borderRadius: 10,
    margin: 10,
  },
});