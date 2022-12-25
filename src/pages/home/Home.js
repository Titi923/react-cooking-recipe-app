import { projectFirestore } from "../../firebase/config"
import { useEffect, useState } from "react";
// styles
import './Home.css';

// components
import RecipeList from '../../components/RecipeList';

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(null)
  const [error, setError] = useState(null)
  
  // fetch the data from the firebase
  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').get().then((snapshot) => {
      console.log(snapshot);
    })
    
  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList propData={data} />}
    </div>
  );
}
