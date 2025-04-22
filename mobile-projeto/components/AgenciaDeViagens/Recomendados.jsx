import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import bahia from '../../assets/bahia.png';
import praia from '../../assets/praia.png';


export default function DestinosPopulares() {
  return (
    <View style={styles.container}>
      <View style={styles.texto}>
        <Text style={styles.title}>Destinos Populares</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" type="material-icons" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainerDestinos}>
        <Image 
          source={bahia} 
          style={styles.avatar} 
          resizeMode="cover"
        />
        <Image 
          source={praia} 
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
  imageContainerDestinos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 160,  
    height: 130, 
    borderRadius: 10,
    margin: 10,
  },
});