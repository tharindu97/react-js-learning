import React, { useReducer } from 'react';
import UserReducer from 'reducers/User';
import createActions from 'actions/User';

export const UserContext = React.createContext({});
export const UserConsumer = UserContext.Consumer;

const user = JSON.parse(window.localStorage.getItem('user')) || null;
const auth = JSON.parse(window.localStorage.getItem('auth')) || null;
const features = JSON.parse(window.localStorage.getItem('features')) || null;
const isAuthorizedTo = (action) => {
  return features.includes(action);
};

const userObj =
  user && auth && features
    ? { user: { ...user, isAuthorizedTo }, auth, features }
    : null;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, userObj);
  return (
    <UserContext.Provider value={{ ...state, ...createActions(dispatch) }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
