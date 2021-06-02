import axios from 'axios';
import { Route } from 'react-router';
import * as actions from './types';

export const setData = (data, which) => ({
  type: actions[`SET_${which.toUpperCase()}`],
  data,
});

export function getData(route) {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state[route].page)
    // dispatch(setLoading());
    return axios.get(`https://api.hnpwa.com/v0/news/${state[route].page + 1}.json`)
      .then((response) => dispatch(setData(response.data, route)));
  };
}
