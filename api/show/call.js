const response = require("./response");
const axios = require("../../plugins/axios");
const { graphQLQuery, graphQLVariables } = require("./query");

const getShowInformation = (id, setData) => {
  let show = {};

  axios({
    method: "POST",
    url: "https://graphql.anilist.co",
    query: graphQLQuery,
    variables: graphQLVariables(id),
    response,
  })
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
