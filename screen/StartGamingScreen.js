import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';

import { Card, NumberContainer } from '../components';
import { Input } from '../components/Input';

import colors from '../constants/color'

export const Screen = () => {
    const [enterValue, setEnterValue] = useState('')
    const [valueConfirm, setValueConfirm] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    const numberInputHandler = (value) => {
        setEnterValue(value.replace(/[^0-9]/g, ''))
    }
    const dismissKeyBoard = () => {
        Keyboard.dismiss()
    }
    const resetInputHandler = () => {
        setEnterValue('')
        setValueConfirm(false)
    }
    const confirmInputHandler = () => {
        const choosenNum = parseInt(enterValue)
        if (isNaN(choosenNum) || choosenNum <= 0 || choosenNum > 99) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{ Text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setValueConfirm(true)
        setSelectedNumber(parseInt(enterValue))
        setEnterValue('')
    }
    let valueConfirmed;
    if (valueConfirm) {
        valueConfirmed =
            <Card style={styles.summaryContainer}>
                <Text>Choosen number: </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='Startsd game' />
            </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={dismissKeyBoard}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text >Select a number</Text>
                    <Input style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enterValue}
                        blurOnsubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2} />
                    <View style={styles.buttonContainer}>
                        <Button title='Reset' color={colors.accent} onPress={resetInputHandler} />
                        <Button title='Confirm' color={colors.primary} onPress={confirmInputHandler} />
                    </View>
                </Card>
                {valueConfirmed}
            </View>
        </TouchableWithoutFeedback>
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
    },
    summaryContainer: {
        marginTop: 10
    }
})