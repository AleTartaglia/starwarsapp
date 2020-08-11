  import { SET_LEAGUE } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUE:
      return { ...action.league };
    default:
      return state;
  }
};