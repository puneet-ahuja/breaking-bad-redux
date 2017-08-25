import * as actions from './actions';

describe('Testing actions', () => {
 

  test('Fetch Homepage Request', () => {

      const fetchHomepageRequestAction = {
          type: 'FETCH_HOMEPAGE_REQUEST'
      }

    expect(actions.fetchHomepageRequest()).toEqual(fetchHomepageRequestAction);
  });

  test('Fetch Homepage Success', () => {

      const homepage = {
          data : 'testing homepage Success'
      }

      const fetchHomepageSuccessAction = {
          type: 'FETCH_HOMEPAGE_SUCCESS',
          homepage
      }

    expect(actions.fetchHomepageSuccess(homepage)).toEqual(fetchHomepageSuccessAction);
  });

  test('Fetch Homepage Failure', () => {

      const fetchHomepageFailureAction = {
          type: 'FETCH_HOMEPAGE_FAILURE'
      }

    expect(actions.fetchHomepageFailure()).toEqual(fetchHomepageFailureAction);
  });

  test('Fetch Season Request', () => {
       const id = 'season1';

      const fetchSeasonRequestAction = {
          type: 'FETCH_SEASON_REQUEST',
          id
      }

    expect(actions.fetchSeasonRequest(id)).toEqual(fetchSeasonRequestAction);
  });

  test('Fetch Season Success', () => {

       const seasonDetails = {
           data : 'this is testing of Season Success'
       };

      const fetchSeasonSuccessAction = {
          type: 'FETCH_SEASON_SUCCESS',
          seasonDetails
      }

    expect(actions.fetchSeasonSuccess(seasonDetails)).toEqual(fetchSeasonSuccessAction);
  });


  test('Fetch Season Error', () => {
       const error = {
           data : 'this is testing of Season Erros'
       };
      const fetchSeasonErrorAction = {
          type: 'FETCH_SEASON_FAILURE',
          error
      }
    expect(actions.fetchSeasonFailure(error)).toEqual(fetchSeasonErrorAction);
  });



  test('Update Episode Request', () => {

      const seasonId = "season1";

      const episode = {
          title: 'test title',
          url : 'test url'
      }
      const updateEpisodeRequest = {
          type: 'UPDATE_EPISODE_REQUEST',
          seasonId,
          episode
      }

    expect(actions.updateEpisodeRequest(episode , seasonId)).toEqual(updateEpisodeRequest);
  });

   test('Update Episode Success', () => {

      const episodes = [{
          title: 'test title',
          url : 'test url'
      }]
      const updateEpisodeSuccess = {
          type: 'UPDATE_EPISODE_SUCCESS',
          episodes
      }

    expect(actions.updateEpisodeSuccess(episodes)).toEqual(updateEpisodeSuccess);
  });

  test('Update Episode Error', () => {

      const error = {
           data : 'this is testing of Season Erros'
       };
      const updateEpisodeError = {
          type: 'UPDATE_EPISODE_FAILURE',
          error
      }

    expect(actions.updateEpisodeFailure(error)).toEqual(updateEpisodeError);
  });

   test('Update Search Filter', () => {

      const filter = "newFilter";

      
      const updateSearchFilterAction = {
          type: 'UPDATE_FILTER',
          filter
      }

    expect(actions.updateSearchFilter(filter)).toEqual(updateSearchFilterAction);
  });
 
});