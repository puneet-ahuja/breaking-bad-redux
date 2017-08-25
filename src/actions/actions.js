
export const fetchHomepageRequest = () => ({
  type: 'FETCH_HOMEPAGE_REQUEST'
});

export const fetchHomepageSuccess = (homepage) => ({
  type: 'FETCH_HOMEPAGE_SUCCESS',
  homepage
});

export const fetchHomepageFailure = () => ({
  type: 'FETCH_HOMEPAGE_FAILURE'
});


export const fetchSeasonRequest = (id) => ({
  type: 'FETCH_SEASON_REQUEST',
  id
});

export const fetchSeasonSuccess = (seasonDetails) => ({
  type: 'FETCH_SEASON_SUCCESS',
  seasonDetails
});

export const fetchSeasonFailure = (error) => ({
  type: 'FETCH_SEASON_FAILURE',
  error
});

export const updateEpisodeRequest = (episode,seasonId) => {
  return {
  type: 'UPDATE_EPISODE_REQUEST',
  episode,
  seasonId
  };
};

export const updateEpisodeSuccess = (episodes) => ({
  type: 'UPDATE_EPISODE_SUCCESS',
  episodes
});

export const updateEpisodeFailure = (error) => ({
  type: 'UPDATE_EPISODE_FAILURE',
  error
});

export const updateSearchFilter = (filter)=>({
  type: 'UPDATE_FILTER',
  filter
});

export const updateHomepageFilter = (filter)=>({
  type: 'UPDATE_HOMEPAGE_FILTER',
  filter
});

export const onHomepage = ()=>({
  type: 'ON_HOMEPAGE'
});

export const onDetailspage = ()=>({
  type: 'ON_DETAILSPAGE'
});

