import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../../assets/Button';
import { JokeContainer } from '../../assets/Card';

const JokeTile = (joke) => {
    return (
        <JokeContainer>
            <div className='info'>
                <h3>Chuck Norris Fact</h3>
                <p>{joke.content}</p>
                <Link to={`/`} className="link">
                    <Button>
                         Back
                    </Button>
                </Link>
            </div>
        </JokeContainer>
    );
}


export default JokeTile;