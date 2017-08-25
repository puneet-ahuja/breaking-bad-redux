import React from "react";
import Episode from './episode.component';
import ModalContent from './modal-content.component';
import { Link, Route } from 'react-router-dom';
import NoDataComponent from './noData.component';

import './season-details.component.css';


class SeasonDetails extends React.Component {

    constructor(props) {

        super(props);

        /**
         * Description of state properties
         * 
         * showModal        : boolean   - flag to represent the visibility of Modal
         * episode          : object    - object to represent episode reference in modal
         * showSearchBox    : boolean   - flag to show search box
         * searchText       : string    - string value to hold value of filter/search text
         */
        this.state = {
            showModal: false,
            episode: {}
        };

        this.onSearchIconClick = this.onSearchIconClick.bind(this);
    }


     componentWillMount() {
        //notify parent container to get details 
        this.props.getSeasonDetail(this.props.seasonId);
        this.props.onDetailsPage();
    }

    /**
     * @param {*} episode
     * Function to display Modal with a episode 
     */
    onEditClick(episode) {
        this.setState({
            showModal: true,
            episode: episode
        });
    }

    /**
     * Function to hide modal without changes
     */
    onCancelClick() {
        this.setState({
            showModal: false,
            episode: {}
        });
    }

    /**
     * Function to update episode and hide modal
     * @param {*} title 
     * @param {*} url 
     */
    onUpdateClick(title, url) {

        let updatedEpisode = Object.assign({}, this.state.episode, { title, url });

        //notify container to update database
        this.props.updateEpisode(updatedEpisode, this.props.match.params.seasonId);

        //hide modal
        this.setState({
            showModal: false,
            episode: updatedEpisode
        });



    }

   

    /**
     * Function to display search box
     */
    onSearchIconClick() {
        this.setState({ showSearchBox: true });
    }

    onFilterChange(event) {
        this.setState({ searchText: event.target.value });
    }

    /**
     * Function to notify change of filter to parent container
     * @param {*} event 
     */
    onSubmitClick(event) {
        event.preventDefault();
        this.props.updateFilter(this.state.searchText);
    }

    /**
     * Function searchBox Componemt
     */
    getSearchBox() {
        return (
            <div className="search-wrapper">
                <form>
                    <input type="text"
                        value={this.state.searchText}
                        className="search-box"
                        placeholder="Enter search term"
                        onChange={this.onFilterChange.bind(this)}
                        required
                    />
                    <button className="close-icon" type="reset" />
                    <button type="submit" onClick={this.onSubmitClick.bind(this)}>Search</button>
                </form>
            </div>
        );
    }

    /**
     * Search Icon
     */
    getSearchIcon() {
        return (
            <div style={{ border: "1px solid red" }} className="search-episode" onClick={this.onSearchIconClick}>
                <img className="search-icon-image" src="https://imageog.flaticon.com/icons/png/512/61/61088.png" alt="Not Available" />
            </div>
        );
    }



    render() {

        let episodes = (this.props.visibleEpisodes && this.props.visibleEpisodes.length > 0)?
            this.props.visibleEpisodes.map((episode) => <Episode key={episode.id} episode={episode} onEditClick={this.onEditClick.bind(this)} />):
            <NoDataComponent/>;
        return (
            <div>
                <h1 className="season-title">{this.props.title}</h1>
                <hr />
                {episodes}

                <div id={this.state.showModal ? 'visible-overlay' : 'hidden-overlay'}/>
                <div id={this.state.showModal ? 'visible-popup' : 'hidden-popup'}>
                    {
                        this.state.showModal &&
                        <ModalContent
                            style={{ zIndex: this.state.showModal ? 10 : -1 }}
                            episode={this.state.episode}
                            onCancelClick={this.onCancelClick.bind(this)}
                            onUpdateClick={this.onUpdateClick.bind(this)}
                        />
                    }

                </div>
            </div>
        );
    }
}

export default SeasonDetails;