import fetchContent from "../../scripts/content/showcase";

const INITIAL_STATE = {
  images: [],
  trending: [],
  top6AiringToday: [],
  top: [],
  isLoaded: false,
};

export default function showcaseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_SHOWCASE_DATA":
      if (!state.isLoaded) fetchContent(state, action.dispatch);
      return state;
    case "SET_SHOWCASE_DATA":
      return Object.assign({}, state, action.newState);
    default:
      return state;
  }
}
