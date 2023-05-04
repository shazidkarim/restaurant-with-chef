/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Recipe = () => {
    const [recipe, setrecipe] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await fetch('http://localhost:5000/chef');
                const data = await res.json();
                setrecipe(data?.chefs);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRecipe();
    }, []);
    return (
        <div>
            <h1>this is recipe</h1>
        </div>
    );
};

export default Recipe;