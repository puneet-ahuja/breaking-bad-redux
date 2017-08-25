const initialState = {
  title : "",
  description : "",
  seasons :[],
  searchFilter : ""

};

const homepage = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HOMEPAGE_SUCCESS':
      return Object.assign({} , action.homepage , {searchFilter:""});

    case 'UPDATE_HOMEPAGE_FILTER':
      return Object.assign({} , state , {searchFilter:action.filter});

    default:
      return state;
  }
};

export default homepage;
