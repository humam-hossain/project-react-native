import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
        // console.log(enteredGoal);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal("");
        onCancel();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require("../assets/images/goal.png")} style={styles.image}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={onCancel} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD GOAL" onPress={addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: "100%",
        padding: 10,
        borderRadius: 6,
        color: "#120438"
    },
    buttonContainer: {
        flexDirection: "row",
        paddingTop: 16
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
    image: {
        width:100,
        height: 100,
        margin: 20
    }
});

export default GoalInput;
