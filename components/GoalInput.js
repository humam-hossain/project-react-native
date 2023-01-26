import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal }) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
        // console.log(enteredGoal);
    };

    const addGoalHandler = ()=>{
        onAddGoal(enteredGoal);
        setEnteredGoal("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your Goal!"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD GOAL" onPress={addGoalHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 6,
        borderRadius: 6,
    }
});

export default GoalInput;
