import React from 'react';
import logo from './chuck.png'



const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="img">
                    <img 
                     className="img-thumbnail rounded"
                     src={logo}
                     alt="chuck-norris" 
                     style={{ height:150, width: 150, margin: 'auto' }}
                     />
                </div>
                <div className="main-heading">
                    <h1>Chuck Norris!</h1>
                    <p>Funny Facts!</p>
                </div>
            </div>
        </div>
    )
};

export default Header;