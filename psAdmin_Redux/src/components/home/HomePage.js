import React from 'react';
import {Link} from 'react-router';

class Homepage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
            <h1>Admin Page</h1>
            <p>React, Redux and React Router in ES6 Applicatin for ultra-responsive web apps</p>
            <Link to="about" className="btn btn-primary">Learn more</Link>
            </div>
        );
    }
}

export default Homepage;