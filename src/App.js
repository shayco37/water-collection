import styled from 'styled-components';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { formReducer } from './reducers/formReducer';
import { MainPage } from './containers/MainPage';
import './App.css';

const Header = styled.header`
    text-align: center;
    background-color: #03A9F4;
    padding: 20px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    h1{
        font-weight: 300;
        font-size: 24px;
        margin: 0;
        color: #FFFFFF;
    }
`;

const store = createStore(formReducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
      <div className={'App'}>
        <Header>
          <h1>Welcome to Water Collected</h1>
        </Header>
          <Provider store={store}>
             <MainPage/>
          </Provider>
      </div>
  );
}

export default App;
