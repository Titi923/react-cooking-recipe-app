import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles
import './RecipeList.css';

export default function RecipeList({ propData }) {
  const { mode } = useTheme();

  if (propData.length === 0) {
    return ( <div className='error'>No recipes to load...</div> )
  }
  
  return (
    <div className="recipe-list">
      {propData.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
}
