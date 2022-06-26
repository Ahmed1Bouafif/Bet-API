import { ActionTypes } from "../Contants/actionTypes";

export const setMenu = (response) => {
  return {
    type: ActionTypes.POST_MENU_SUCCESS,
    payload: response,
  };
};
export const setTourement = (response) => {
  return {
    type: ActionTypes.POST_TOURNEMENT_SUCCESS,
    payload: response,
  };
};
export const setBet = (response) => {
  return {
    type: ActionTypes.POST_BET_SUCCESS,
    payload: response,
  };
};
