const api = require("./response"); // TEST
// const axios = require("axios");
// const { graphQLQuery, graphQLVariables } = require("./query");

// const api = new Promise(function (resolve, reject) {
//   axios({
//     method: "POST",
//     url: "https://graphql.anilist.co",
//     data: {
//       query: graphQLQuery,
//       variables: graphQLVariables,
//     },
//   })
//     .then((res) => {
//       resolve(res.data.data);
//     })
//     .catch((err) => reject(err));
// });

// Helper Functions

const fetchThumbnail = (show) => {
  let thumbnail =
    "https://i.pinimg.com/originals/73/bd/7a/73bd7a13415bee143a943991547f8d19.jpg";
  if (
    "characters" in show &&
    "nodes" in show["characters"] &&
    show["characters"]["nodes"].length
  ) {
    thumbnail = show.characters.nodes[0].image.large;
  }
  return thumbnail;
};

const fetchStudio = (show) => {
  let studio = "🤷";
  if (
    "studios" in show &&
    "edges" in show["studios"] &&
    show["studios"]["edges"].length
  ) {
    studio = show.studios.edges[0].node.name;
  }
  return studio;
};

const fetchGenre = (show) => {
  let genre = "🤷";
  if ("genres" in show && show["genres"].length) {
    genre = show.genres[0];
  }
  return genre;
};

// State Functions
const modifyStateForHeroGallery = (state, res) => {
  let HeroGallery = [];
  if ("HeroGalleryContent" in res && "media" in res["HeroGalleryContent"]) {
    HeroGallery = res["HeroGalleryContent"]["media"].map((show) => ({
      id: show.id,
      title: show.title.userPreferred,
      banner: show.bannerImage,
    }));
  }

  state["HeroGallery"] = HeroGallery;
  return state;
};

const modifyStateForTrending = (state, res) => {
  let Trending = [];
  if ("TrendingContent" in res && "media" in res["TrendingContent"]) {
    Trending = res["TrendingContent"]["media"].map((show) => ({
      id: show.id,
      thumbnail: fetchThumbnail(show),
      genre: show.genres.length > 0 ? show.genres[0] : "N/A",
      title: show.title.userPreferred,
      studio: fetchStudio(show),
    }));
  }
  state["Trending"] = Trending;
  return state;
};

const modifyStateForTopAiringToday = (state, res) => {
  let TopAiringToday = [];

  if (
    "TopAiringTodayContent" in res &&
    "airingSchedules" in res["TopAiringTodayContent"]
  ) {
    TopAiringToday = res["TopAiringTodayContent"]["airingSchedules"].map(
      (show) => ({
        id: show.media.id,
        thumbnail: show.media.coverImage.large,
        title: show.media.title.userPreferred,
        score: show.media.popularity,
      })
    );
  }
  state["TopAiringToday"] = TopAiringToday;
  return state;
};

const modifyStateForTopCategories = (state, res) => {
  let TopCategories = [];

  const addEntryToCategories = (content, title) => {
    if (content in res) {
      const list = res[content]["media"].map((show) => ({
        id: show.id,
        title: show.title.userPreferred,
        genre: fetchGenre(show),
        thumbnail: fetchThumbnail(show),
      }));
      TopCategories.push({ title, list });
    }
  };

  addEntryToCategories("TopOfAllContent", "Top Anime");
  addEntryToCategories("TopOfActionContent", "Top Action");
  addEntryToCategories("TopOfRomanceContent", "Top Romance");
  addEntryToCategories("TopOfDramaContent", "Top Drama");
  addEntryToCategories("TopOfComedyContent", "Top Comedy");
  state["TopCategories"] = TopCategories;
  return state;
};

const setShowCaseData = (state, dispatch) => {
  api
    .then((res) => {
      state = modifyStateForHeroGallery(state, res);
      state = modifyStateForTrending(state, res);
      state = modifyStateForTopAiringToday(state, res);
      state = modifyStateForTopCategories(state, res);
      state["isLoaded"] = true;
    })
    .catch((err) => {
      console.log("Error", err);
      dispatch({
        type: "SET_SHOWCASE_DATA",
        newState: { didLoadingFail: true },
      });
    })
    .finally(() => {
      dispatch({
        type: "SET_SHOWCASE_DATA",
        newState: state,
      });
    });
};

// TEST
// setShowCaseData({}, ({ type, newState }) => {});

module.exports = setShowCaseData;
