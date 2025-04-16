import React from 'react';
import { SearchBar } from 'react-native-elements';

export default function CustomSearchBar() {  
  const [search, setSearch] = React.useState('');
  return (
    <SearchBar
      placeholder="Search doctor"
      onChangeText={setSearch}
      value={search}
      lightTheme
      round
      containerStyle={{ backgroundColor: '#5A60EA', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0}}
      inputContainerStyle={{ backgroundColor: 'white', marginRight: 20, marginLeft: 20 }}
    />
  );
}