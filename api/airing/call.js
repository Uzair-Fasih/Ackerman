const response = require("./response");
const axios = require("../../plugins/axios");
const { graphQLQuery, graphQLVariables } = require("./query");

const setScheduleData = (state, dispatch, day, offset) => {
  axios({
    method: "POST",
    url: "https://graphql.anilist.co",
    query: graphQLQuery,
    variables: graphQLVariables(offset),
    response,
  })
    .then((res) => {
      if ("Page" in res && "airingSchedules" in res["Page"]) {
        state[day]["lists"] = res["Page"]["airingSchedules"].map((show) => ({
          id: show.media.id,
          title: show.media.title.userPreferred,
          thumbnail: show.media.coverImage.large,
          score: show.media.popularity,
        }));
      }
      state[day]["isLoaded"] = true;
    })
    .catch((err) => {
      console.log("Error", err);
      state[day].didLoadingFail = true;
      dispatch({
        type: "SET_SCHEDULE_DATA",
        newState: state,
      });
    })
    .finally(() => {
      dispatch({
        type: "SET_SCHEDULE_DATA",
        newState: state,
      });
    });
};

// TEST
// setScheduleData(
//   {},
//   ({ type, newState }) => {
//     console.log(newState);
//   },
//   "MON",
//   0
// );

module.exports = setScheduleData;
