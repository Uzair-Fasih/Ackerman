import setScheduleData from "../../api/airing/call";

const INITIAL_STATE = {
  SUN: {
    isLoaded: false,
    didLoadingFail: false,
    lists: [],
  },
  MON: {
    isLoaded: false,
    didLoadingFail: false,
    lists: [],
  },
  TUE: {
    isLoaded: false,
    didLoadingFail: false,
    lists: [],
  },
  WED: {
    isLoaded: false,
    didLoadingFail: false,
    lists: [],
  },
  THU: {
    isLoaded: false,
    didLoadingFail: false,
    lists: [],
  },
  FRI: {
    isLoaded: false,
    didLoadingFail: false,
    lists: [],
  },
  SAT: {
    isLoaded: false,
    didLoadingFail: false,
    lists: [],
  },
};

export default function showcaseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_SCHEDULE_DATA":
      if (!state.isLoaded)
        setScheduleData(state, action.dispatch, action.day, action.offset);
      return state;
    case "SET_SCHEDULE_DATA":
      return Object.assign({}, state, action.newState);
    default:
      return state;
  }
}
