
import React from "react";
import './noData.component.css';

class NoDataComponent extends React.Component{
    render(){
        
        return (
            <p className="error-message">No data to display</p>
        );
    }
}



export default NoDataComponent;