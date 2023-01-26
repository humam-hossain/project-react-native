import {
    FlatList,
    StyleSheet,
    View,
} from "react-native";

import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = (enteredGoal) => {
        // console.log(enteredGoal);
        setGoals((currentGoals) => [
            ...currentGoals, 
            {text: enteredGoal, id: Math.random().toString()}
        ]);
    };

    const deleteGoalHandler = (id) =>{
        setGoals((currentGoals)=>{
            return currentGoals.filter((goal)=> goal.id !== id);
        });
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList 
                    data={goals} 
                    renderItem={itemData=>{
                        return <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoalHandler} />
                    }}

                    keyExtractor={(item, index)=>{
                        return item.id
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 7,
    },
});
