import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { Card } from '../components';

import colors from '../constants/color'

export const Screen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text >Select a number</Text>
                <TextInput style={styles.input} />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' color={colors.accent}/>
                    <Button title='Confirm' color={colors.primary}/>
                </View>
            </Card>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '80%'
    }
})