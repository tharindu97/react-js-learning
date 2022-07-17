import { UPDATE_NAME } from 'constants/User';

export default (dispatch) => ({
  updateName: (fullName) => {
    dispatch({
      type: UPDATE_NAME,
      payload: fullName,
    });
  },
});
