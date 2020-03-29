import React, { useState, useRef, useEffect }    from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer                           from '../components/NumberContainer'
import Card                                      from '../components/Card'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    }

    return randomNumber
}

const GameScreen = ({ userChoice, onGameOver }) => {
    const [ numberOfRounds, setNumberOfRounds ] = useState(0)
    const [ currentGuess, setCurrentGuess ]     = useState(generateRandomBetween(1, 100, userChoice))
    const currentLow                            = useRef(1)
    const currentHigh                           = useRef(100)

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(numberOfRounds)
        }
    }, [ currentGuess, userChoice, onGameOver ])

    const nextGuessHandler = direction => {
        if (
            ('LOWER' === direction && currentGuess < userChoice)
            || ('GREATER' === direction && currentGuess > userChoice)
        ) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [ { text: 'Sorry!', style: 'cancel' } ])
            return
        }

        if ('LOWER' === direction) {
            currentHigh.current = currentGuess
        } else if ('GREATER' === direction) {
            currentLow.current = currentGuess
        }

        setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess))
        setNumberOfRounds(currentRounds => currentRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title={'Lower'} onPress={nextGuessHandler.bind(this, 'LOWER')}/>
                <Button title={'Greater'} onPress={nextGuessHandler.bind(this, 'GREATER')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:          {
        flex:       1,
        padding:    8,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection:  'row',
        justifyContent: 'space-around',
        marginTop:      24,
        width:          300,
        maxWidth:       '80%',
    },
})

export default GameScreen