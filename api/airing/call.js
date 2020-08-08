const api = require("./response");
const axios = require("axios");
const { graphQLQuery, graphQLVariables } = require("./query");

// const api = function (offset) {
//   return new Promise(function (resolve, reject) {
//     axios({
//       method: "POST",
//       url: "https://graphql.anilist.co",
//       data: {
//         query: graphQLQuery,
//         variables: graphQLVariables(offset),
//       },
//     })
//       .then((res) => {
//         resolve(res.data.data);
//       })
//       .catch((err) => reject(err));
//   });
// };

const setScheduleData = (state, dispatch, day, offset) => {
  api(offset)
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
