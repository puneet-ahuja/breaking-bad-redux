import * as actions from '../actions/actions';
import seasonDetailsReducer from './season-details-reducer';

describe('Testing Saeson Details Reducer', () => {
 
    describe('Testing Fetch Season Success', () => {
 
        test('Test when state type is undefined', () => {
            const seasonDetails = {
                title : "Test title for season",
                episodes : []
            }
            const state = undefined;
            const action = actions.fetchSeasonSuccess(seasonDetails)
            const newState = {
                title : "Test title for season",
                episodes : [],
                filter : ""
            }
            expect(seasonDetailsReducer(state , action)).toEqual(newState);
        });

        test('Test when state type is defined', () => {
            const seasonDetails = {
                title : "Test title for season",
                episodes : []
            }
            const state = {
                title : "Test title for season1",
                episodes : [],
                filter : ""
            };
            const action = actions.fetchSeasonSuccess(seasonDetails)
            const newState = {
                title : "Test title for season",
                episodes : [],
                filter : ""
            }
            expect(seasonDetailsReducer(state , action)).toEqual(newState);
        });
    });

    describe('Testing Update Filter', () => {
        test('Test when state type is undefined', () => {
            const filter = "car" ;
            const state = undefined;
            const action = actions.updateSearchFilter(filter)
            const newState = {
                title : "",
                episodes : [],
                filter : "car"
            }
            expect(seasonDetailsReducer(state , action)).toEqual(newState);
        });

        test('Test when state type is defined', () => {
           const filter = "car" ;
            const state = {
                title : "Test title for season1",
                episodes : [
                        {
                            title : "test title 1"
                        },
                        {
                            title : "test title 3"
                        }
                    ],
                filter : "cat"
            };
            const action = actions.updateSearchFilter(filter)
            const newState = {
                title : "Test title for season1",
                episodes : [
                        {
                            title : "test title 1"
                        },
                        {
                            title : "test title 3"
                        }
                    ],
                filter : "car"
            }
            expect(seasonDetailsReducer(state , action)).toEqual(newState);
        });
    });

    describe('Testing Update Episode Success', () => {
        test('Test when state type is undefined', () => {
            const episodes = [
                    {
                        title : "test title 1"
                    },
                    {
                        title : "test title 2"
                    }
                ]
            const state = undefined;
            const action = actions.updateEpisodeSuccess(episodes)
            const newState = {
                title : "",
                episodes : [
                    {
                        title : "test title 1"
                    },
                    {
                        title : "test title 2"
                    }
                ],
                filter : ""
            }
            expect(seasonDetailsReducer(state , action)).toEqual(newState);
        });

        test('Test when state type is defined', () => {
           const episodes = [
                    {
                        title : "test title 1"
                    },
                    {
                        title : "test title 2"
                    }
                ]
            const state = {
                title : "Test title for season1",
                episodes : [
                        {
                            title : "test title 1"
                        },
                        {
                            title : "test title 3"
                        }
                    ],
                filter : ""
            };
            const action = actions.updateEpisodeSuccess(episodes)
            const newState = {
                title : "Test title for season1",
                episodes : [
                    {
                        title : "test title 1"
                    },
                    {
                        title : "test title 2"
                    }
                ],
                filter : ""
            }
            expect(seasonDetailsReducer(state , action)).toEqual(newState);
        });
    });
    
   test('Test when action type is undefined', () => {
      const state = {
          title : "",
          episodes : [],
          filter : ""
      }
      const action = {
          type : undefined
      }
    expect(seasonDetailsReducer(state , action)).toBe(state);
  });
});