import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';
import Login from './components/login/login';

export default function App() {
  // PostItem.getImageState("./assets/PlanIt.jpeg");
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/PlanIt.jpeg")} resizeMode="stretch" style={styles.image}>
      </ImageBackground>
      
      <View style={styles.textContainer}>
        <Text style={styles.sectionTitle}>Welcome to PlanIt</Text>
      </View>
      
      <View style={styles.items}>
        <Login />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    alignItems: 'center',
    paddingTop: 30
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  items: {
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  }
});

