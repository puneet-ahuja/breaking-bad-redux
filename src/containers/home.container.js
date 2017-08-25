import { connect } from 'react-redux';
import Home from '../components/home.component';
import { createSelector } from 'reselect';
import {onHomepage  } from '../actions/actions';




const filterSelector = state => state.homepage.searchFilter;
const seasonsSelector = state => state.homepage.seasons;



const getVisibleSeason = createSelector(
    filterSelector , seasonsSelector ,
    (filter , seasons) =>{
    return seasons.filter(
        (season) => season.title.toUpperCase().startsWith(filter.toUpperCase())
    );
}
);



const mapStateToProps = (state) => {
    
   return {
  visibleSeasons : getVisibleSeason(state),
  title:state.homepage.title,
  description: state.homepage.description
};};

const mapDispatchToProps = (dispatch) => ({
    
    onHomepage : ()=>{dispatch(onHomepage());}
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
