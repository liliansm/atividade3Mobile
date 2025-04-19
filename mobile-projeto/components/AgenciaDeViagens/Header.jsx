import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'; 

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
          style={styles.avatar} 
        />
        <View>
          <Text style={styles.welcome}>Bem Vindo!</Text>
          <Text style={styles.name}>Lilian Souza</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="notifications" type="material-icons" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#284703',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  welcome: {
    color: 'white',
    fontSize: 16,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 5,
  },
});