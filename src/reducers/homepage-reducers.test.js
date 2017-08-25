import * as actions from '../actions/actions';
import homepageReducer from './homepage-reducer';

describe('Testing Reducers', () => {
 

   test('Reducer Homepage Success', () => {

      const homepage = {
          data : 'testing homepage Success'
      }

      const action = actions.fetchHomepageSuccess(homepage);

      const newState = Object.assign({} , homepage , {searchFilter : ""});

    expect(homepageReducer(undefined , action)).toEqual(newState);
  });


  test('Reducer Homepage Success with prev state', () => {

      const homepage = {
          headerUrl : "test url1",
          description : "This is description1",
          title : "Test title1",
          seasons : [{}]
      }

      const state = {
          headerUrl : "test url",
          description : "This is description",
          title : "Test title",
          seasons : [],
          searchFilter : ""
      }

      const action = actions.fetchHomepageSuccess(homepage);

      const newState = Object.assign({} , homepage ,{searchFilter:""});

    expect(homepageReducer(state , action)).toEqual(newState);
  });

  test('Reducer Homepage Success with action type undefined', () => {
      const state = {
          headerUrl : "test url",
          description : "This is description",
          title : "Test title",
          seasons : []
      }
    expect(homepageReducer(state , {})).toBe(state);
  });

  
 
});