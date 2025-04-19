import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CustomSearchBar from '../components/AgenciaDeViagens/CustomSearchBar';
import Header from '../components/AgenciaDeViagens/Header';
import Categorias from '../components/AgenciaDeViagens/Categorias';
import DestinosPopulares from '../components/AgenciaDeViagens/DestinosPopulares'
import Recomendados from '../components/AgenciaDeViagens/Recomendados';
import NavBar from '../components/AgenciaDeViagens/NavBar';

export default function PagDoctor() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#F7F9FC' }}>
        <CustomSearchBar />
        <Header />
        <Categorias />
        <DestinosPopulares />
        <Recomendados />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}
