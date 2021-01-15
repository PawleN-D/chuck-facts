import React from 'react';
import { Link } from "react-router-dom";
import "./component.css";

const CategoryTile = ({category}) => {
    category = category.toUpperCase();
    return (
        <div className="container">
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <h3>Chuck Norris Fact</h3>
                        <p className="text-secondary">{category} Category</p>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary"> View Random Fact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CategoryTile;