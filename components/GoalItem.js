import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = ({text, id, onDelete}) => {
    return (
        <Pressable onPress={onDelete.bind(this, id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        color: "white",
    }
})

export default GoalItem