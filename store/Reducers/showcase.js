import setShowCaseData from "../../api/showcase/call";

const INITIAL_STATE = {
  HeroGallery: [],
  Trending: [],
  TopAiringToday: [],
  TopCategories: [],
  isLoaded: false,
  didLoadingFail: false,
};

export default function showcaseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_SHOWCASE_DATA":
      if (!state.isLoaded) setShowCaseData(state, action.dispatch);
      return state;
    case "SET_SHOWCASE_DATA":
      return Object.assign({}, state, action.newState);
    default:
      return state;
  }
}
