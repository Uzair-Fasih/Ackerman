const graphQLQuery = `query MyQuery ($id: Int) {
  Media (id: $id) {
    bannerImage
		genres
    title {
    	userPreferred
  	}
    description
    nextAiringEpisode {
      id
    }
    recommendations(page: 1, perPage: 3, sort: ID_DESC) {
      nodes {
      	media {
          coverImage {
            medium
          }
          id
          title {
            userPreferred
          }
        }
    	}
    }
    studios (isMain: true) {
      edges {
        node {
        	name
        }
      }
    }
    popularity
    averageScore
    streamingEpisodes {
      title
      thumbnail
      url
    }
  }
}`;

const graphQLVariables = (id) => {
  return {
    id: id,
  };
};

module.exports = { graphQLQuery, graphQLVariables };
