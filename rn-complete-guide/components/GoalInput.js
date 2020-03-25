import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = ({ addGoalHandler, open, cancelGoalAddHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoal = () => {
        addGoalHandler(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={open} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    style={styles.input}
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="CANCEL" onPress={cancelGoalAddHandler} color={'red'} /></View>
                    <View style={styles.button}><Button title="ADD" onPress={addGoal} /></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    button: {
        width: '46%'
    }
})

export default GoalInput