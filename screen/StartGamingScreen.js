import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Screen = () => {
    return (
        <View style={styles.screen}>
            <Text>this is screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 10,
        flex:1
    }
})