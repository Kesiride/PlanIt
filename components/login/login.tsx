import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Button, Text} from 'react-native';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder={'Username'}
        onChangeText={(val) => setUsername(val)}> 
      </TextInput>
      <TextInput 
        style={styles.input}
        placeholder={'Password'}
        onChangeText={(val) => setPassword(val)}> 
      </TextInput>
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={() => Alert.alert(username + ' ' + password)}>
        </Button>
      </View>
      
      <View style={styles.accountLogin}>
        <Text>Ready to PlanIt? Create Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    },
    input: {
      // backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 20,
      borderBottomWidth: 2
    },
    buttonContainer: {
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