import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7287b',
        paddingTop: 36,
        height: 90,
        width: '100%'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
})