import React from "react";
import Season from './season.component.js';
import './home.component.css';

class Home extends React.Component{

    componentWillMount(){
        this.props.onHomepage();
    }

    render(){
        let seasonTiles = (this.props.visibleSeasons)&& this.props.visibleSeasons.map(
                (season =>( 
                    <Season 
                        key={season.id} 
                        url={season.url} 
                        title={season.title} 
                        id={season.id} 
                        episodesCount={season.episodes}
                    />
                    )
                )
            );
        return(
            <div>
                <h1 className="header-title">{this.props.title}</h1>
                <p className="description">{this.props.description}</p>
                {seasonTiles}
            </div>                    
        );                    
    }
}

export default Home;