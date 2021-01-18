import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../../assets/Button';
import { CardContainer } from '../../assets/Card';

const CategoryTile = ({ category }) => {
    return (
        <CardContainer>
            <div className="info">
                <h3>Fun Fact About:</h3>
                <p>{category} Category</p>
                <Button>
                    <Link to={`/random?category=${category}`} className="link"> Discover Fact</Link>
                </Button>
            </div>
        </CardContainer>        
    
    )
}


export default CategoryTile;