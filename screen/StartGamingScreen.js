import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { Card } from '../components';
import { Input } from '../components/Input';

import colors from '../constants/color'

export const Screen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text >Select a number</Text>
                <Input style={styles.input} blurOnsubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' color={colors.accent} />
                    <Button title='Confirm' color={colors.primary} />
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
        width: 50,
        textAlign: 'center'
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