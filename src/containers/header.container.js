import React from "react";
import { connect } from 'react-redux';
import HeaderComponent from '.././components/header.component';
import {onHomepage} from '../actions/actions';

const mapStateToProps = state => {
    return {
        headerUrl: state.homepage.headerUrl
    };
};
const mapDispatchToProps = dispatch =>{
    return {
        
    };
};
let Header = connect(mapStateToProps , mapDispatchToProps)(HeaderComponent);

export default Header;




