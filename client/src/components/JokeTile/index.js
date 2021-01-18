import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../../assets/Button';

const JokeTile = (joke) => {
    return (
            <div className="card">
                <div className="row">
                    <div className="col">
                        <h3 className="fw-lighter">Chuck Norris Fact</h3>
                        <p className="text-">{joke.content}</p>
                        <Button>
                            <Link to={`/`} className="link"> Back</Link>
                        </Button>
                        
                    </div>

                </div>
            </div>

    )
}


export default JokeTile;