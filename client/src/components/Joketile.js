import React from 'react';
import { Link } from "react-router-dom";

const JokeTile = (joke) => {
    // category = category.toUpperCase();
    console.log(joke);
    return (
        <div className="container">
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <h3 className="fw-lighter">Chuck Norris Fact</h3>
                        <p className="text-">{joke.content}</p>
                        <Link to={`/`} className="btn btn-primary mt-3"> Back</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default JokeTile;