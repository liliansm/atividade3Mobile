import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} style={styles.avatar} />
      <View>
        <Text style={styles.welcome}>Bem Vindo</Text>
        <Text style={styles.name}>Dani Martinez</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5A60EA',
    padding: 20,
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
});
