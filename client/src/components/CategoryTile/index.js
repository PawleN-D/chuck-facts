import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../../assets/Button';
import { CategoryContainer } from '../../assets/Card';

const CategoryTile = ({ category }) => {
    return (
        <CategoryContainer>
            <div className="info">
                <h3>Fun Fact About:</h3>
                <p>{category} Category</p>
                <Link to={`/random?category=${category}`} className="link">
                    <Button>
                        Discover Fact!
                    </Button>
                </Link>
            </div>
        </CategoryContainer>        
    
    )
}


export default CategoryTile;