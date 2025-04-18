import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NavBar({ selected }) {
  const navItems = [
    { name: 'Início', icon: 'home-outline' },
    { name: 'Verificados', icon: 'checkmark-circle-outline' },
    { name: 'Chat', icon: 'chatbubbles-outline' },
    { name: 'Configuração', icon: 'settings-outline' },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isSelected = selected === item.name;
        return (
          <TouchableOpacity key={item.name} style={styles.item}>
            <Icon
              name={item.icon}
              type="ionicon"
              color={isSelected ? '#4F46E5' : '#666'}
              size={26}
            />
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  labelSelected: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
});
