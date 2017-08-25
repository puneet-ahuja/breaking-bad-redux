import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import SearchComponent from '../components/search.component';

import { updateHomepageFilter , updateSearchFilter} from '../actions/actions.js';


const mapStateToProps = (state) => {
   return{
      onHomepage : state.onHomepage
   };
};

const mapDispatchToProps = (dispatch) => ({
    updateHomepageFilter : (filter) => {dispatch(updateHomepageFilter(filter));},
    updateDetailspageFilter : (filter) => {dispatch(updateSearchFilter(filter));}
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export default withRouter(SearchContainer);
