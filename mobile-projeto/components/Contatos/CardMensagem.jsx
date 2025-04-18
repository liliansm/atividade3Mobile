import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardMensagem({ image, nome, mensagem, tempo, quantidade }) {
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <View style={styles.textArea}>
          <Text style={styles.name}>{nome}</Text>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
        <View style={styles.rightArea}>
          {quantidade > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{quantidade}</Text>
            </View>
          )}
          <Text style={styles.time}>{tempo}</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
  textArea: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#666',
  },
  rightArea: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 40,
  },
  badge: {
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
