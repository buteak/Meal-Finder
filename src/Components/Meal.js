import { useGlobal } from "../Context/Context"
import { BsHandThumbsUp } from 'react-icons/bs'

const Meal = () => {
  const {meals, loading, selectMeal, addToFavorite} = useGlobal();


  if (loading) {
    return (
      <section className="section">
          <h4>Loading.....</h4>
      </section>
    )
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No Available Meals</h4>
      </section>
    )
  }
  return (
    <section className="section-center">
      {meals.map((meal) => {
      const {idMeal, strMeal, strMealThumb, strCategory} = meal


      return (
        <main key={idMeal} className="single-meal">
           <h2>Name: {strMeal}</h2>
           <img src={strMealThumb} alt={strMeal} style={{
          width: '150px'
        }} className="img"  onClick={() => selectMeal(idMeal)}/>
          <footer> 
            <h5>{ strCategory}</h5>
            <button onClick={() => addToFavorite(idMeal)}> <BsHandThumbsUp/></button>
          </footer>
         </main>
      )
    })}
    </section>
  )
}
export default Meal