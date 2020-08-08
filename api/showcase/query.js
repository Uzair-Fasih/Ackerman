const graphQLQuery = `query MyQuery ($last: Int, $next: Int, $year:Int, $seasonYear: MediaSeason){
  
  HeroGalleryContent: Page (page: 1, perPage: 8) {
    media (seasonYear: $year, season:$seasonYear, sort: [TRENDING_DESC]) {
      id
      title {
        userPreferred
      }
      bannerImage
    }
  }
  
  TrendingContent: Page (page: 1, perPage: 20) {
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
  
  TopAiringTodayContent: Page (page: 1, perPage: 6) {
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

  TopOfAllContent: Page (page: 1, perPage: 5) {
  	media(sort: [POPULARITY_DESC]) {
      id
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
   
  TopOfActionContent: Page (page: 1, perPage: 5) {
  	media(genre: "Action", sort: [POPULARITY_DESC]) {
      id
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
  
  TopOfRomanceContent: Page (page: 1, perPage: 5) {
  	media(genre: "Romance", sort: [POPULARITY_DESC]) {
      id
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
  
  TopOfDramaContent: Page (page: 1, perPage: 5) {
  	media(genre: "Drama", sort: [POPULARITY_DESC]) {
      id
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
  
  TopOfComedyContent: Page (page: 1, perPage: 5) {
  	media(genre: "Comedy", sort: [POPULARITY_DESC]) {
      id
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
}`;

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

const graphQLVariables = {
  last: new Date().setHours(0, 0, 0, 0) / 1000,
  next: new Date().setHours(24, 0, 0, 0) / 1000,
  year: new Date().getFullYear(),
  seasonYear: getSeason(),
};

module.exports = { graphQLQuery, graphQLVariables };
