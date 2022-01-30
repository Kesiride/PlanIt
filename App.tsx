import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import Task from './components/Task';

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
        <Task text={'Email'} />
        <Task text={'Username'} />
        <Task text={'Password'} />

        <View style={styles.button}>
          <Button title="Sign Up" onPress={() => Alert.alert('Simple Button pressed')}>
          </Button>
        </View>
        
        <Text style={styles.accountLogin}>Already have an account? Log in</Text>
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
  },
  button: {
    backgroundColor: '#55BCF6',
    alignItems: 'center',
    alignSelf: 'center',
    width: 150,
    height: 40,
    margin: 20,
    borderRadius: 10,
    fontWeight: 'bold'
  },
  accountLogin: {
    alignSelf: 'center',
    marginBottom: 20
  }
});

