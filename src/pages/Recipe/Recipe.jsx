/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row, Toast } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const Recipe = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await fetch('https://b7a10-chef-recipe-hunter-server-side-shazidkarim.vercel.app/recipe');
                const data = await res.json();
                setRecipes(data?.recipes);
            } 
            catch (error) {
                console.log(error);
            }
        };
        fetchRecipe();
    }, []);

    const handleFavorite = (recipe) => {
        setFavorites([...favorites, recipe.id]);
    }

    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <Row xs={1} md={1} className="g-4">
                    {recipes.map((recipe) => (
                        <Col key={recipe.id}>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={recipe.img} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h2>Name:{recipe.name}</h2>
                                        </Card.Title>
                                        <Card.Text>
                                            <h5>Cooking methood: <br /> {recipe.cooking_method}</h5>
                                            <p>Rating: {recipe.rating} </p>
                                        </Card.Text>
                                        <button 
                                            className='btn btn-primary' 
                                            disabled={favorites.includes(recipe.id)}
                                            onClick={() => handleFavorite(recipe)}
                                        >
                                            {favorites.includes(recipe.id) ? 'Favorited' : 'Add to Favorite'}
                                        </button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer></Footer>
            {favorites.length > 0 && (
                <Toast 
                    onClose={() => setFavorites([])}
                    show={favorites.length > 0}
                    delay={3000}
                    autohide
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        backgroundColor: '#17a2b8',
                        color: 'white'
                    }}
                >
                    <Toast.Body>
                        {favorites.map((id) => (
                            <p key={id}>Recipe {id} added to favorites!</p>
                        ))}
                    </Toast.Body>
                </Toast>
            )}
        </div>
    );
};

export default Recipe;
