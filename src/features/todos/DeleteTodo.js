import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './todosSlice';

export const DeleteTodo = ({ todoId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todoId));
    };

    return (
        <View style={styles.container}>
            <Button title="Delete" onPress={handleDelete} style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        color: ' #ff0000',  
    },
});
