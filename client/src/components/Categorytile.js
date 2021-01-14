import React from 'react';

import "./component.css";

const CategoryTile = ({category}) => {
    return (
        <div className="facttile">
            <h3>Chuck Norris Facts</h3>
            <hr/>
            <p>For Category</p>
            <button>{category}</button>
        </div>
    )
}

export default CategoryTile;