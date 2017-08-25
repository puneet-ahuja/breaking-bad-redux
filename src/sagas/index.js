import { put, takeEvery, all , call } from 'redux-saga/effects';
import * as Actions  from '../actions/actions';
import * as SERVICES from '../service';

export function * homepageFetchAsync(action) {
    try{
        const homepage = yield call(SERVICES.getStateData);
        yield put(Actions.fetchHomepageSuccess(JSON.parse(homepage)) );     
    }
    catch(error){
        yield put(Actions.fetchHomepageFailure(error));
    }
}

export function * seasonFetchAsync(action) {
    try{
        const seasonDetails = yield call(SERVICES.getSeasonDetail ,  action.id );
        yield put(Actions.fetchSeasonSuccess(JSON.parse(seasonDetails)) );     
    }
    catch(error){
        yield put(Actions.fetchSeasonFailure(error));
    }
}

export function * updateEpisodeAsync(action) {
    try{
        const updatedEpisodes = yield call(SERVICES.updateEpisode ,  action.episode ,action.seasonId );
        yield put(Actions.updateEpisodeSuccess(JSON.parse(updatedEpisodes)) );     
    }
    catch(error){
        yield put(Actions.updateEpisodeFailure(error));
    }
}



export function *watchHomepageFetchAsync() {
  yield takeEvery('FETCH_HOMEPAGE_REQUEST', homepageFetchAsync);
  yield takeEvery('FETCH_SEASON_REQUEST', seasonFetchAsync);
  yield takeEvery('UPDATE_EPISODE_REQUEST', updateEpisodeAsync);
}

export default function *rootSaga() {
  yield all([
    watchHomepageFetchAsync()
  ]);
}


