import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const Screen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
                <Text >Select a number</Text>
                <TextInput style={styles.input} />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' />
                    <Button title='Confirm' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 10,
        flex: 1
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
    },
    input: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        maxWidth: '80%'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }
})