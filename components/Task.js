import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Task = (props) => {
    const [emailText, onChangeEmail] = React.useState(props.text);
    const [usernameText, onChangeUsername] = React.useState("Username");
    const [PasswordText, onChangePassword] = React.useState("Password");

    return (
        <View style={styles.container}> 
            <TextInput style={styles.item} onChangeText={onChangeEmail} value={emailText}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 2
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4
    },
    itemText: {},
    circularItem: {},
    input: {
        borderWidth: 1,
        padding: 10,
    }
});

export default Task;