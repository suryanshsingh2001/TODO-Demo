import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { TodoApp } from './src/features/todos/TodoApp';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
export default App;
