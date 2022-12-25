import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from "../../firebase/config"

// styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true)
    
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if(doc.exists) {
        setIsPending(false);
        setData(doc.data())
      } else {
        setIsPending(false);
        setError("That data is not valid");
      }
    })
    
  }, [])


  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className='page-title'>{data.title}</h2>
          <p>Takes {data.cookingTime} to cook</p>
          <ul>
            {data.ingredients.map( ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
