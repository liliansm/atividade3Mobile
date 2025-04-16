import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import CustomSearchBar from '../components/CustomSearchBar';
import ListaCategoria from '../components/ListaCategoria';
import MelhoresDoutores from '../components/MelhoresDoutores';
import NavBar from '../components/NavBar';

export default function PagDoctor() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#F7F9FC' }}>
        <Header />
        <CustomSearchBar />
        <ListaCategoria />
        <MelhoresDoutores />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}
