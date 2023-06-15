// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

// Define initial state
const initialState = {
  username: '',
  password: '',
  responseData: '',
};

// Define actions
export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password,
});

export const setResponseData = (responseData) => ({
  type: 'SET_RESPONSE_DATA',
  payload: responseData,
});

export const submitForm = () => async (dispatch, getState) => {
  const { username, password } = getState();

  try {
    const response = await axios.post("http://localhost:3001/api/userdata", {
      username,
      password,
    });

    dispatch(setResponseData(JSON.stringify(response.data)));
  } catch (error) {
    console.error('Error:', error);
    // Handle any errors here
  }
};

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_RESPONSE_DATA':
      return {
        ...state,
        responseData: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
