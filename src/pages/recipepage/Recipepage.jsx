import "./RecipePage.css";

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipePage = ({ recipes }) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipes.find((r) => r.id === Number(id));
        if (foundRecipe) {
            setRecipe(foundRecipe);
        }
    }, [id, recipes]);

    if (!recipe) {
        return <div>Loading...</div>;
    }
   
    return (
        <div className="recipe-page">
            <div className="recipe-container">
                <aside>
                    <img className="recipe-image" src={recipe.imageUrl} alt={recipe.title} />

                    <Link to="/" className="back-arrow">
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                    </Link>

                    <h3>Ingredienser</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.ingredient}</li>
                        ))}
                    </ul>
                </aside>

                <div>
                    <h1>{recipe.title}</h1>
                    
                    <div className="recipe-details">
                        <p>{recipe.prepTime} min</p>
                        <p>|</p>
                        <p>{recipe.servings} portioner</p>
                        <p>|</p>
                        <p>{recipe.category.name}</p>
                    </div>

                    <div className="recipe-instructions">
                        <h3>Instruktioner</h3>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;
