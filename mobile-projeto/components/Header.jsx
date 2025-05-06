import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Header() {
  const [usuarios, setUsuarios] = useState([])
  console.log(usuarios)

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
    .then(res => res.json())
    .then(data => setUsuarios(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.iconsContainer}>
          <Icon name="wifi" type="material-community" color="white" size={18} />
          <Icon name="signal-cellular-alt" type="material" color="white" size={18} containerStyle={styles.icon} />
        </View>
      </View>

;     {usuarios.map((doc, i) => (
        <View key={i} style={styles.mainHeader}>
          <Image source={{ uri: doc.img }} style={styles.avatar} />
          <View>
            <Text style={styles.welcome}>Bem Vindo</Text>
            <Text style={styles.name}>{doc.nome}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#5A60EA',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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