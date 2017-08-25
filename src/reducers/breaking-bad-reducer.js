import { combineReducers } from "redux";
import homepage from "./homepage-reducer";
import seasonDetails from "./season-details-reducer";
import onHomepage from './manage-search.reducer';

const breakingBadApp = combineReducers({
  homepage,
  seasonDetails,
  onHomepage
});

export default breakingBadApp;
