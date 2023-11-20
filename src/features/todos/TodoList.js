import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { DeleteTodo } from "./DeleteTodo";
import { ToggleTodo } from "./ToggleTodo";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      {todos.map((todo, index) => (
        <View key={todo.id} style={styles.todoContainer}>
          <Text style={styles.todoText}>{`${index + 1}. ${todo.text}`}</Text>
          <View style={styles.buttonContainer}>
            <ToggleTodo todoId={todo.id} completed={todo.completed} />
            <DeleteTodo todoId={todo.id} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: "#FAF9F6",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  todoText: {
    margin: 4,
    fontWeight: "bold",
  },
  todoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 'auto', 
  },
});
