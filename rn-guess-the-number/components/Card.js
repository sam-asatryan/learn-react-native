import React                from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ children, style }) => {
    return (
        <View style={{ ...styles.card, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor:     'black',
        shadowOffset:    { width: 0, height: 2 },
        shadowOpacity:   .24,
        shadowRadius:    8,
        elevation:       8,
        backgroundColor: 'white',
        padding:         24,
        borderRadius:    8,
    },
})

export default Card