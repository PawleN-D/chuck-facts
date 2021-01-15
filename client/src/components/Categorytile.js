import React from 'react';
import { Link } from "react-router-dom";
import "./component.css";

const CategoryTile = ({category}) => {
    return (
        <div className="facttile">
            <h3>Chuck Norris Facts</h3>
            <hr/>
            <p>For Category</p>
            <p>{category}</p>
            <Link to={`/random?${category}`} className="btn btn-primary">Discover Fact</Link>
        </div>
    )
}

export default CategoryTile;