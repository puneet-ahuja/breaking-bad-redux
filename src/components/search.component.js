import React from "react";
import './search.component.css';
import SearchContainer from '.././containers/search.container'; 


class SearchComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            filterText : "",
            showButton : false
        };

        this.onFilterChange = this.onFilterChange.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

    }

    onFilterChange(event){
        this.setState({
            filterText : event.target.value,
        });
    }
    onInputClick(event){
        this.setState({
            showButton : true
        });
    }

    handleSubmitClick(){
        if(this.props.onHomepage){
            this.props.updateHomepageFilter(this.state.filterText);
        }
        else{
            this.props.updateDetailspageFilter(this.state.filterText);
        }
    }
    render(){

        return (
            <div >
                <input 
                    className="input-search"
                    type="text" 
                    value={this.state.filterText} 
                    onChange={this.onFilterChange.bind(this)}
                    onClick = {this.onInputClick.bind(this)}
                    placeholder="Search"
                />
                {this.state.showButton && 
                    <div 
                        className="search-button btn btn-primary" 
                        onClick={this.handleSubmitClick}
                    >
                        Search
                    </div>}
            </div>
        );                 
    }
}

export default SearchComponent;