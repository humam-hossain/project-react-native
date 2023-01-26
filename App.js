import { FlatList, StyleSheet, View, Button } from "react-native";

import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [goals, setGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    const endAddGoalHandler = () => {
        // console.log("Cancel");
        setModalIsVisible(false);
    };

    const addGoalHandler = (enteredGoal) => {
        if (enteredGoal !== "") {
            setGoals((currentGoals) => [
                ...currentGoals,
                { text: enteredGoal, id: Math.random().toString() },
            ]);
        } else {
            console.log("Empty input");
        }
    };

    const deleteGoalHandler = (id) => {
        setGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    };

    return (
        <>
            <StatusBar style="auto"/>
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="#a065ec"
                    onPress={startAddGoalHandler}
                />
                {modalIsVisible && (
                    <GoalInput
                        visible={modalIsVisible}
                        onAddGoal={addGoalHandler}
                        onCancel={endAddGoalHandler}
                    />
                )}
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDelete={deleteGoalHandler}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </View>
            </View>
        </>
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
