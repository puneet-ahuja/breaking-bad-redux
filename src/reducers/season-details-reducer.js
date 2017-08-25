const seasonDetails = (state = { title: "", episodes: [], filter: "" }, action) => {
  switch (action.type) {

    case 'FETCH_SEASON_SUCCESS':
      return {
        title: action.seasonDetails.title,
        episodes: action.seasonDetails.episodes,
        filter: ""
      };

    case 'UPDATE_EPISODE_SUCCESS':
      return Object.assign({}, state, { episodes: action.episodes });

    case 'UPDATE_FILTER':
      return Object.assign({}, state, { filter: action.filter });

    default:
      return state;
  }
};

export default seasonDetails;
