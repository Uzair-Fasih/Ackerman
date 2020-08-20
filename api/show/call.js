// const api = require("./response");
const axios = require("axios");
const { graphQLQuery, graphQLVariables } = require("./query");

const api = function (id) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "POST",
      url: "https://graphql.anilist.co",
      data: {
        query: graphQLQuery,
        variables: graphQLVariables(id),
      },
    })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => reject(err));
  });
};

const getShowInformation = (id, setData) => {
  let show = {};

  api(id)
    .then((res) => {
      media = res["Media"];
      show = {
        loaded: true,
        background: media["bannerImage"],
        genre: media["genres"][0],
        title: media["title"]["userPreferred"],
        studio: media["studios"]["edges"][0]["node"]["name"],
        popularity: media["popularity"],
        score: media["averageScore"],
        description: media["description"],
        recommendations: media["recommendations"]["nodes"].map((show) => ({
          thumbnail: show["media"]["coverImage"]["medium"],
          title: show["media"]["title"]["userPreferred"],
          id: show["media"]["id"],
        })),
        airing: media["nextAiringEpisode"],
        episodes: media["streamingEpisodes"].map((episode) => ({
          ...episode,
          search:
            episode.title.split("-")[0].replace("Episode ", "") +
            media["title"]["userPreferred"],
        })),
      };
    })
    .catch((err) => {
      console.log("Error", err);
    })
    .finally(() => {
      setData(show);
    });
};

// TEST
// getShowInformation(115113, (show) => {
//   console.log(show);
// });

module.exports = getShowInformation;
