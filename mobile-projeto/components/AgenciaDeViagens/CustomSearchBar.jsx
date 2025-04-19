import React from 'react';
import { SearchBar, Icon } from 'react-native-elements';
import { View, TouchableOpacity, StyleSheet } from 'react-native'; // Corrigido imports

export default function CustomSearchBar() {  
  const [search, setSearch] = React.useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon 
            name="airplane" 
            type="material-community" 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>
        <SearchBar
          placeholder="Qual o seu proximo destino"
          onChangeText={setSearch}
          value={search}
          lightTheme
          round
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.inputContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#284703',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 1,
    padding: 0,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 40,
    width: 260,
  },
  iconButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 8,
    marginLeft: 10,
    marginRight: 20,
  },
});