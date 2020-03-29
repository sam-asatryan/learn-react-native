import React                              from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = ({ numberOfRounds, userNumber, onRestartGame }) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {numberOfRounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button title={'New Game'} onPress={onRestartGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:           1,
        alignItems:     'center',
        justifyContent: 'center',
    },
})

export default GameOverScreen