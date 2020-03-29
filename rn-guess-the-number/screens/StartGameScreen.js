import React, { useState }                                                           from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card                                                                          from '../components/Card'
import Colors                                                                        from '../constants/colors'
import Input                                                                         from '../components/Input'
import NumberContainer
                                                                                     from '../components/NumberContainer'

const StartGameScreen = ({ onStartGame }) => {

    const [ enteredValue, setEnteredValue ]     = useState('')
    const [ confirmed, setConfirmed ]           = useState(false)
    const [ selectedNumber, setSelectedNumber ] = useState()

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [ { text: 'Okay', style: 'destructive', onPress: resetInputHandler } ],
            )
            return
        }

        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Select a number</Text>
                    <Input
                        style={styles.input}
                        keyboardType={'number-pad'}
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title={'Reset'} color={Colors.accent} onPress={resetInputHandler}/>
                        </View>
                        <View style={styles.button}>
                            <Button title={'Confirm'} color={Colors.primary} onPress={confirmInputHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmed && (
                    <Card style={styles.summaryContainer}>
                        <Text>You selected</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title={'Start Game'} onPress={() => onStartGame(selectedNumber)}/>
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:           {
        flex:       1,
        padding:    8,
        alignItems: 'center',
    },
    title:            {
        fontSize:       20,
        marginVertical: 10,
    },
    inputContainer:   {
        width:      300,
        maxWidth:   '80%',
        alignItems: 'center',
    },
    input:            {
        width:     50,
        textAlign: 'center',
    },
    buttonContainer:  {
        flexDirection:     'row',
        width:             '100%',
        justifyContent:    'space-between',
        paddingHorizontal: 16,
    },
    button:           {
        width:          '45%',
        justifyContent: 'space-between',
    },
    summaryContainer: {
        marginTop:  20,
        alignItems: 'center',
    },
})

export default StartGameScreen