import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { projectFirestore } from "../firebase/config"

// styles
import './RecipeList.css';
import iconTrash from "../assets/icon_trash.svg"

export default function RecipeList({ propData }) {
  const { mode } = useTheme();

  if (propData.length === 0) {
    return ( <div className='error'>No recipes to load...</div> )
  }

  const handleDelete = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  }
  
  return (
    <div className="recipe-list">
      {propData.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          <img 
            className='delete'
            src={iconTrash}
            onClick = {() => handleDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
