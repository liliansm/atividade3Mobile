import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.iconsContainer}>
          <Icon name="wifi" type="material-community" color="white" size={18} />
          <Icon name="signal-cellular-alt" type="material" color="white" size={18} containerStyle={styles.icon} />
        </View>
      </View>

      <View style={styles.mainHeader}>
        <Avatar
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          size="medium"
          containerStyle={styles.avatar}
        />
        <View>
          <Text style={styles.welcome}>Bem Vindo</Text>
          <Text style={styles.name}>Dani Martinez</Text>
        </View>
      </View>
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