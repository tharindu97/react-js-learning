import { UPDATE_NAME } from 'constants/User';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      const user = {
        ...state.user,
        fullName: action.payload,
      };
      window.localStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
};
