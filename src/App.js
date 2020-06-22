import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Employees from './containers/employees/Employees';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Employees />
      </div>
    </Provider>
  );
}

export default App;
