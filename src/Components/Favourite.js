import { useGlobal } from "../Context/Context"

const Favourite = () => {

  const {favorite, selectMeal, removeFromFavorite} = useGlobal()

  return (
    <section className="favorite">
      <div className="favorite-content">
        <h3>Favourites</h3>
        <div className="favorite-container">
          {favorite.map((fav) => {
      const {idMeal, strMealThumb} = fav;
      return (
        <div key={idMeal} className="favorite-item">
          <img onClick={() => selectMeal(idMeal, true)} src={strMealThumb} alt={idMeal}  className="favorite-img"/>
          <button className="remove-btn" onClick={() => removeFromFavorite(idMeal)}>
remove
          </button>  
              </div>
      )
    })}
        </div>
      </div>
    </section>
  )
}
export default Favourite