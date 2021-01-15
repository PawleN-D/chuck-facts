import React from 'react';
import logo from './chuck.png'

const Header = () => {
    return (
        <div className="container mb-4 mt-3">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img 
                     className="img-thumbnail rounded"
                     src={logo}
                     alt="chuck-norris" 
                     style={{ height:150, width: 150, margin: 'auto' }}
                     />
                </div>
                <div className="col-md-5 mt-3">
                    <h1 className="text-primary text-center">Chuck Norris!</h1>
                    <p className="text-center fw-bold">Funny Facts!</p>
                </div>
            </div>
        </div>
    )
};

export default Header;