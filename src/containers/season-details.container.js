import React from "react";
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import SeasonDetails from '../components/season-details.component';
import { fetchSeasonRequest , updateEpisodeRequest  , updateSearchFilter, onDetailspage} from '../actions/actions.js';

const filterSelector = state => state.seasonDetails.filter;
const episodesSelector = state => state.seasonDetails.episodes;



const getVisibleEpisodes = createSelector(
    filterSelector , episodesSelector ,
    (filter , episodes) =>{
    return episodes.filter(
        (episode) => episode.title.toUpperCase().startsWith(filter.toUpperCase())
    );
}
);




const mapStateToProps = (state,ownProps) => {
   return {
    seasonId : ownProps.match.params.seasonId,
    visibleEpisodes : getVisibleEpisodes(state),
    title : state.seasonDetails.title
};};

const mapDispatchToProps = (dispatch) => ({
    getSeasonDetail : seasonId => dispatch(fetchSeasonRequest(seasonId)),
    updateEpisode : (episode,seasonId) => {dispatch(updateEpisodeRequest(episode ,seasonId));},
    updateFilter : (filter) =>{dispatch(updateSearchFilter(filter));} ,
    onDetailsPage : ()=>{dispatch(onDetailspage());}
});

const SeasonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonDetails);

export default SeasonDetailsContainer;