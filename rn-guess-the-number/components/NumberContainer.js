import React                      from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors                     from '../constants/colors'

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:    2,
        borderColor:    Colors.accent,
        padding:        8,
        borderRadius:   8,
        marginVertical: 8,
        alignItems:     'center',
        justifyContent: 'center',
    },
    number:    {
        color:    Colors.accent,
        fontSize: 24,
    },
})

export default NumberContainer