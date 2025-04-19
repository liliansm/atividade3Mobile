import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NavBar() {
  return (
    <View style={styles.nav}>
      {/* Home */}
      <View style={styles.iconContainer}>
        <Icon name="home" type="font-awesome-5" color="white" size={24} />
        <Text style={styles.iconText}>Home</Text>
      </View>
      
      {/* Explore */}
      <View style={styles.iconContainer}>
        <Icon name="compass" type="font-awesome-5" color="white" size={24} />
        <Text style={styles.iconText}>Explore</Text>
      </View>
      
      {/* Pesquisa */}
      <View style={styles.iconContainer}>
        <Icon name="search" type="font-awesome-5" color="white" size={24} />
        <Text style={styles.iconText}>Pesquisa</Text>
      </View>
      
      {/* Perfil */}
      <View style={styles.iconContainer}>
        <Icon name="user" type="font-awesome-5" color="white" size={24} />
        <Text style={styles.iconText}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#284703',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 6,
    fontWeight: '500',
  },
});