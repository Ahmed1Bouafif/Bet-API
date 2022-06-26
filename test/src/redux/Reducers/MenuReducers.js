import { ActionTypes } from "../Contants/actionTypes";
const initialState = {
  menu: [],
  tournement: [],
  bet: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_MENU_SUCCESS:
      return { ...state, menu: payload };
    case ActionTypes.POST_TOURNEMENT_SUCCESS:
      return { ...state, tournement: payload };
    case ActionTypes.POST_BET_SUCCESS:
      return { ...state, bet: [...state.bet, payload] };
    default:
      return state;
  }
};
export default reducer;
