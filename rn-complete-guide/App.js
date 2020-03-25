import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [open, setOpen] = useState(false)

    const addGoalHandler = (enteredGoal) => {
        setCourseGoals((currentGoals) => {
            return [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]
        })
        setOpen(false)
    }

    const cancelGoalAddHandler = () => {
        setOpen(false)
    }

    const removeGoalHandler = (id) => {
        setCourseGoals((goals) => goals.filter((goal) => goal.id !== id))
    }

    return (
        <View style={styles.screen}>
            <Button title='Add new Goal' onPress={() => setOpen(true)}/>
            <GoalInput open={open} cancelGoalAddHandler={cancelGoalAddHandler} addGoalHandler={addGoalHandler} />
            <FlatList
                keyExtractor={(item) => item.id}
                data={courseGoals}
                renderItem={goal => <GoalItem id={goal.item.id} onDelete={removeGoalHandler} title={goal.item.value} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 30
    }
});
