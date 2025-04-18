import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import ChatHeader from '../components/Contatos/ChatHeader';
import CardMensagem from '../components/Contatos/CardMensagem';
import NavBar from '../components/Contatos/NavBar';

export default function PagChat() {
  const messages = [
    {
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      nome: 'Lilian Souza',
      mensagem: 'Estou ansiosa para te ver.',
      tempo: '3 min',
      quantidade: 3,
    },
    {
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      nome: 'Alex William',
      mensagem: 'Estou querendo fl com vc.',
      tempo: '5 seg',
      quantidade: 5,
    },
    {
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      nome: 'Daniella Marques',
      mensagem: 'Podemos resolver tudo hj!',
      tempo: '4 horas',
      quantidade: 8,
    },
    {
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      nome: 'Larissa Queiroz',
      mensagem: 'Qualquer coisa estarei aqui!',
      tempo: '4 dias',
      quantidade: 3,
    },
    {
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      nome: 'Messias Acacy',
      mensagem: 'Vamos combinar o que falta.',
      tempo: '2 semanas',
      quantidade: 1,
    },
    {
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      nome: 'Karla Kastanhari',
      mensagem: 'Foi um prazer trabalhar com vc!',
      tempo: '5 semanas',
      quantidade: "",
    },
    {
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      nome: 'Davilla Souza',
      mensagem: 'Desculpe a demora.',
      tempo: '3 meses',
      quantidade: "",
    },
  ];

  return (
    <View style={styles.container}>
      <ChatHeader />
      <ScrollView style={styles.scroll}>
        {messages.map((msg, index) => (
          <CardMensagem key={index} {...msg} />
        ))}
      </ScrollView>
      <NavBar selected="Chat" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf0f7',
  },
  scroll: {
    padding: 15,
  },
});
