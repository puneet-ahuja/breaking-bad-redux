const initialState = true;

const manageSearch = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_HOMEPAGE':
      return true;

    case 'ON_DETAILSPAGE':
      return false;

    default:
      return state;
  }
};

export default manageSearch;
