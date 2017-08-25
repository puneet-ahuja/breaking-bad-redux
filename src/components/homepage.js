import React from "react";
import Header from "../containers/header.container";
import HomeContainer from '../containers/home.container';
import SeasonDetailsContainer from "../containers/season-details.container";
import NoDetailErrorComponent from "./noDetails.component";

import {BrowserRouter as Router , Route} from 'react-router-dom';

class Homepage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router >
                <div className="container">
                    <Header/>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/home" component={HomeContainer} />
                    <Route exact path="/details" component={NoDetailErrorComponent} />
                    <Route exact path="/details/:seasonId" component={SeasonDetailsContainer} />
                </div>
           </Router>
        );            
        
    }
}



export default Homepage;




