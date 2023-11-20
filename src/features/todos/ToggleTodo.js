import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './todosSlice';

export const ToggleTodo = ({ todoId, completed }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todoId));
    };

    return (
        <View style={styles.container}>
            <Button title={completed ? 'Undo' : 'Complete'} onPress={handleToggle} style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        color: '#fff',
    },
});
