const graphQLQuery = `query MyQuery ($last: Int, $next: Int){
  Page {
    airingSchedules(airingAt_greater: $last, airingAt_lesser: $next) {
      
      media {
        id
        title {
          userPreferred
        }
        coverImage {
          large
        }
        popularity
      nextAiringEpisode {
                airingAt
                timeUntilAiring
                episode
            }
      }
    }
  }
}`;

const graphQLVariables = (offset) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return {
    last: d.setHours(0, 0, 0, 0) / 1000,
    next: d.setHours(24, 0, 0, 0) / 1000,
  };
};

module.exports = { graphQLQuery, graphQLVariables };
