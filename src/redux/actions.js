import { ADD_USER_VIEW, GET_VIEWS } from './types';

export const addUserViews = payload => async dispatch => {
  console.log(payload);
  dispatch({ type: ADD_USER_VIEW, payload });
};

export const getViews = () => async dispatch => {
  const data = JSON.parse(localStorage.getItem('lastView'));
  console.log(data);
  dispatch({ type: GET_VIEWS, payload: data });
};
