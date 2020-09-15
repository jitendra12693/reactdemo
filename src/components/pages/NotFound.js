import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="dispaly-1" >
                Page Not Found
            </h1>
            <p>
            <NavLink to="/" exact >Go Back To Home</NavLink>
            </p>
        </div>
    )
}

export default NotFound