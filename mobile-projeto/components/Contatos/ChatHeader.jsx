import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Svg, Path } from 'react-native-svg';

export default function ChatHeader() {
  return (
    <View style={styles.headerContainer}>
      {/* Organic blue shapes background */}
      <View style={styles.organicShapes}>
        <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <Path 
            d="M0,20 Q30,5 40,30 T80,20 T100,40 L100,100 L0,100 Z" 
            fill="#4F46E5" 
            opacity="0.2"
          />
          <Path
            d="M0,40 Q20,10 50,50 T100,30 L100,100 L0,100 Z"
            fill="#4F46E5"
            opacity="0.15"
          />
        </Svg>
      </View>
      
      <View style={styles.container}>
        <View style={styles.logo}>
          <Icon name="mail-outline" type="ionicon" color="#4F46E5" size={32} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chat de Mensagens</Text>
          <View style={styles.blueLine} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  organicShapes: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  container: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#4F46E5",
    borderWidth: 2,
    borderStyle: 'solid',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  blueLine: {
    height: 2,
    backgroundColor: '#4F46E5',
    width: '70%',
    marginTop: 5,
  },
});
