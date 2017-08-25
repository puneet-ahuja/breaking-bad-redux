import * as sagas from './index';
import * as SERVICES from '../service'
import { put , call } from 'redux-saga/effects'
import * as Actions  from '../actions/actions'


describe('Testing Sagas' , ()=>{

    describe('testing fetch HomePage Async' , ()=>{
        describe('testing Homepage Async Without Error' , ()=>{
            const homepage = {
                descripttion : 'testing description',
                title : 'testing title'
            }
            let gen = sagas.homepageFetchAsync();
            test('Call the get State data function' , ()=>{
                expect(gen.next().value).toEqual(call(SERVICES.getStateData));
            });
            test('Dispatch Success Action' , ()=>{
                expect(gen.next(JSON.stringify(homepage)).value).toEqual(put(Actions.fetchHomepageSuccess(homepage)))
            })
            test('Ending Test case' , ()=>{
                expect(gen.next().done).toBeTruthy();
            })
        })

        describe('testing Homepage Async With Error' , ()=>{
        
            let gen = sagas.homepageFetchAsync();
            test('Call the get State data function' , ()=>{
                expect(gen.next().value).toEqual(call(SERVICES.getStateData));
            });
            const error = {
                errorMessage : 'This is a error Message'
            }
            test('Throwing Error' , ()=>{
                expect(gen.throw(error).value).toEqual(put(Actions.fetchHomepageFailure(error)))
            })
            test('Ending Test case' , ()=>{
                expect(gen.next().done).toBeTruthy();
            })
        })

    })



    describe('testing fetch Season Async' , ()=>{
        describe('testing Season Async Without Error' , ()=>{
            const seasonDetails = {
                description : 'testing description',
                title : 'testing title'
            }
            const action = {
                id : "season1"
            }
            let gen = sagas.seasonFetchAsync(action);
            test('Call the get Season Details function' , ()=>{
                expect(gen.next().value).toEqual(call(SERVICES.getSeasonDetail , action.id));
            });
            test('Dispatch Success Action' , ()=>{
                expect(gen.next(JSON.stringify(seasonDetails)).value).toEqual(put(Actions.fetchSeasonSuccess(seasonDetails)))
            })
            test('Ending Test case' , ()=>{
                expect(gen.next().done).toBeTruthy();
            })
        })

        describe('testing Homepage Async With Error' , ()=>{
        
            const action = {
                id : "season1"
            }
            let gen = sagas.seasonFetchAsync(action);
            
            test('Call the get Season Details function' , ()=>{
                expect(gen.next().value).toEqual(call(SERVICES.getSeasonDetail , action.id));
            });
            const error = {
                errorMessage : 'This is a error Message'
            }
            test('Throwing Error' , ()=>{
                expect(gen.throw(error).value).toEqual(put(Actions.fetchSeasonFailure(error)))
            })
            test('Ending Test case' , ()=>{
                expect(gen.next().done).toBeTruthy();
            })
        })

    })

    describe('testing Update Episode Async' , ()=>{
        describe('testing Uodate Episode Async Without Error' , ()=>{
            const updatesEpisodes = [
                {
                    title : "title1",
                    url : "url1"
                },
                {
                    title : "title2",
                    url : "url2"
                }
            ]
            const action = {
                episode : {
                    title : "title1",
                    url : "url1"
                },
                seasonId : "season1"
            }
            let gen = sagas.updateEpisodeAsync(action);
            test('Call update Epsisode function' , ()=>{
                expect(gen.next().value).toEqual(call(SERVICES.updateEpisode , action.episode , action.seasonId));
            });
            test('Dispatch Success Action' , ()=>{
                expect(gen.next(JSON.stringify(updatesEpisodes)).value).toEqual(put(Actions.updateEpisodeSuccess(updatesEpisodes)))
            })
            test('Ending Test case' , ()=>{
                expect(gen.next().done).toBeTruthy();
            })
        })

        describe('testing Update Async With Error' , ()=>{
        
            const action = {
                episode : {
                    title : "title1",
                    url : "url1"
                },
                seasonId : "season1"
            }
            let gen = sagas.updateEpisodeAsync(action);
            
            test('Call the update episode function async' , ()=>{
                expect(gen.next().value).toEqual(call(SERVICES.updateEpisode , action.episode , action.seasonId));
            });
            const error = {
                errorMessage : 'This is a error Message'
            }
            test('Throwing Error' , ()=>{
                expect(gen.throw(error).value).toEqual(put(Actions.updateEpisodeFailure(error)))
            })
            test('Ending Test case' , ()=>{
                expect(gen.next().done).toBeTruthy();
            })
        })

    })

})



