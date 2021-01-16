import React from 'react';
import { Link } from "react-router-dom";
import "./component.css";

const CategoryTile = ({ category }) => {
    // category = category.toUpperCase();
    return (
        <div className="container">
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <h3 className="fw-lighter">Chuck Norris Fact</h3>
                        <p className="text-">{category} Category</p>
                    </div>
                    <div className="col-md-3 mt-5">
                        <Link to={`/random?category=${category}`} className="btn btn-primary mt-3"> Discover Fact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CategoryTile;