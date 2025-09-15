import RecipeCard from '../../components/recipeCard/RecipeCard';
import './Mainpage.css';


const Mainpage = ({ recipes }) => {

    if (!recipes) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ul className='recipe-list'>
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </>
    );
};

export default Mainpage;