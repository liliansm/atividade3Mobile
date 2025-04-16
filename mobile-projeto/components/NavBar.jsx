import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NavBar() {
  return (
    <View style={styles.nav}>
      <Icon name="home" type="font-awesome-5" color="white" />
      <Icon name="user-md" type="font-awesome-5" color="white" />
      <Icon name="calendar-alt" type="font-awesome-5" color="white" />
      <Icon name="user" type="font-awesome-5" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5A60EA',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
