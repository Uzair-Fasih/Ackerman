import axios from "axios";

const getSeason = () => {
  const indexedMonth = new Date().getMonth();
  if (indexedMonth <= 2) {
    return "WINTER";
  } else if (indexedMonth <= 5) {
    return "SPRING";
  } else if (indexedMonth <= 8) {
    return "SUMMER";
  }
  return "FALL";
};

const showcase = {
  graphQLQuery: `query MyQuery ($last: Int, $next: Int, $year:Int, $seasonYear: MediaSeason){
  
  images: Page (page: 1, perPage: 8) {
    media (seasonYear: $year, season:$seasonYear, sort: [TRENDING_DESC]) {
      id
      title {
        userPreferred
      }
      bannerImage
    }
  }
  
  trending: Page (page: 1, perPage: 20) {
    media (seasonYear: $year, season:$seasonYear, sort: [TRENDING_DESC]) {
      id
      characters(sort: [FAVOURITES_DESC], page: 1, perPage: 1) {
        nodes {
          image {
            large
          }
        }
      }
      genres
      title {
        userPreferred
      }
      studios(sort: [FAVOURITES_DESC]) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
  
  top6AiringToday: Page {
    airingSchedules(airingAt_greater: $last, airingAt_lesser: $next) {
      
      media {
        id
        status
        title {
          userPreferred
        }
        coverImage {
          large
        }
        popularity
      }
    }
  }

  top: Page (page: 1, perPage: 5) {
  	media(sort: [POPULARITY_DESC]) {
      title {
        userPreferred
      }
      characters(sort: [FAVOURITES_DESC], page: 1, perPage: 1) {
        nodes {
          image {
            large
          }
        }
      }
    	genres
  	}
	}
  
  
  topAction: Page (page: 1, perPage: 5) {
  	media(genre: "Action", sort: [POPULARITY_DESC]) {
      title {
        userPreferred
      }
      characters(sort: [FAVOURITES_DESC], page: 1, perPage: 1) {
        nodes {
          image {
            large
          }
        }
      }
    	genres
  	}
	}
  
  topRomance: Page (page: 1, perPage: 5) {
  	media(genre: "Romance", sort: [POPULARITY_DESC]) {
      title {
        userPreferred
      }
      characters(sort: [FAVOURITES_DESC], page: 1, perPage: 1) {
        nodes {
          image {
            large
          }
        }
      }
    	genres
  	}
	}
  
  topDrama: Page (page: 1, perPage: 5) {
  	media(genre: "Drama", sort: [POPULARITY_DESC]) {
      title {
        userPreferred
      }
      characters(sort: [FAVOURITES_DESC], page: 1, perPage: 1) {
        nodes {
          image {
            large
          }
        }
      }
    	genres
  	}
	}
  
  
  topComedy: Page (page: 1, perPage: 5) {
  	media(genre: "Comedy", sort: [POPULARITY_DESC]) {
      title {
        userPreferred
      }
      characters(sort: [FAVOURITES_DESC], page: 1, perPage: 1) {
        nodes {
          image {
            large
          }
        }
      }
    	genres
  	}
	}
}
`.trim(),
  graphQLVariables: {
    last: new Date().setHours(0, 0, 0, 0) / 1000,
    next: new Date().setHours(24, 0, 0, 0) / 1000,
    year: new Date().getFullYear(),
    seasonYear: getSeason(),
  },
};

const fetchShowcase = (state, dispatch) => {
  axios({
    method: "POST",
    url: "https://graphql.anilist.co",
    data: {
      query: showcase.graphQLQuery,
      variables: showcase.graphQLVariables,
    },
  })
    .then((res) => {
      const NEW_STATE = state;
      NEW_STATE["isLoaded"] = true;
      NEW_STATE["images"] = res.data.data.images.media.map((x) => ({
        id: x.id,
        title: x.userPreferred,
        bannerImage: x.bannerImage,
      }));

      NEW_STATE["trending"] = res.data.data.trending.media.map((x) => ({
        id: x.id,
        thumb:
          x.characters.nodes.length > 0
            ? x.characters.nodes[0].image.large
            : "N/A",
        genre: x.genres.length > 0 ? x.genres[0] : "N/A",
        title: x.title.userPreferred,
        studio:
          x.studios.edges.length > 0 ? x.studios.edges[0].node.name : "N/A",
      }));

      NEW_STATE[
        "top6AiringToday"
      ] = res.data.data.top6AiringToday.airingSchedules.map((x) => ({
        id: x.media.id,
        thumb: x.media.coverImage.large,
        title: x.media.title.userPreferred,
        score: x.media.popularity,
      }));

      NEW_STATE["top"] = [
        {
          list_title: "Top Anime",
          list: res.data.data.top.media.map((x) => ({
            title: x.title.userPreferred,
            genre: x.genres.length > 0 ? x.genres[0] : "N/A",
            thumb:
              x.characters.nodes.length > 0
                ? x.characters.nodes[0].image.large
                : "N/A",
          })),
        },
        {
          list_title: "Top Action",
          list: res.data.data.topAction.media.map((x) => ({
            title: x.title.userPreferred,
            genre: x.genres.length > 0 ? x.genres[0] : "N/A",
            thumb:
              x.characters.nodes.length > 0
                ? x.characters.nodes[0].image.large
                : "N/A",
          })),
        },
        {
          list_title: "Top Romance",
          list: res.data.data.topRomance.media.map((x) => ({
            title: x.title.userPreferred,
            genre: x.genres.length > 0 ? x.genres[0] : "N/A",
            thumb:
              x.characters.nodes.length > 0
                ? x.characters.nodes[0].image.large
                : "N/A",
          })),
        },
        {
          list_title: "Top Drama",
          list: res.data.data.topDrama.media.map((x) => ({
            title: x.title.userPreferred,
            genre: x.genres.length > 0 ? x.genres[0] : "N/A",
            thumb:
              x.characters.nodes.length > 0
                ? x.characters.nodes[0].image.large
                : "N/A",
          })),
        },
        {
          list_title: "Top Comedy",
          list: res.data.data.topComedy.media.map((x) => ({
            title: x.title.userPreferred,
            genre: x.genres.length > 0 ? x.genres[0] : "N/A",
            thumb:
              x.characters.nodes.length > 0
                ? x.characters.nodes[0].image.large
                : "N/A",
          })),
        },
      ];
      dispatch({ type: "SET_SHOWCASE_DATA", newState: NEW_STATE });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchShowcase;
