import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = ({text, id, onDelete}) => {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={onDelete.bind(this, id)}
                android_ripple={{color: "#210644"}}
                style={({pressed})=> pressed && styles.pressedItem} 
            >
                <Text style={styles.goalItemText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
    },
    goalItemText: {
        color: "white",
        padding: 8
    },
    pressedItem: {
        opacity: 0.5
    }
})

export default GoalItem