import { useGlobal } from "../Context/Context"

const Modal = () => {

  const {closeModal, selectedMeal} = useGlobal();
  const {strMealThumb, strMeal, idMeal, strInstructions, strSource} = selectedMeal;

  return (
    <aside className="modal-overlay" onClick={closeModal}>
      <div className="modal-container">
        <img src={strMealThumb} alt={strMeal} className="img modal-img" />
        <div className="modal-content">
          <h4>{strMeal}</h4>
          <p>Cooking Instructions</p>
          <p>{strInstructions}</p>
          <a href={strSource} target="_blank">More</a>
        </div>
        <button onClick={closeModal} className="btn btn-hipster">Close</button>
      </div>
      
   </aside>
  )
}
export default Modal