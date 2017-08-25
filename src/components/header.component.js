import React from "react";
import {Link} from 'react-router-dom';
import './header.component.css';
import SearchContainer from '.././containers/search.container'; 


class HeaderComponent extends React.Component{
    render(){

        return (
            <header>
                <span className="title-logo">Breaking Bad</span>
                <ul className="navbar-list">
                    <li className="navbar-list-item">
                        <Link to="/home" className="link-tab">Home</Link>
                    </li>
                    <li className="navbar-list-item"><SearchContainer/></li>
                    <li className="navbar-list-item">
                        <Link to="/details" className="link-tab">Details</Link>
                    </li>
                </ul>
            </header>
        );                 
    }
}

export default HeaderComponent;