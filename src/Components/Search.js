import { useGlobal } from "../Context/Context"
import { useState } from 'react'

const Search = () => {

  const {setSearchTerm, fetchRandomMeal} = useGlobal();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text)
    }
  }
  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Meal" className="form-input" value={text} onChange={(e) => handleChange(e)} />
        <button type="submit" className="btn">Search</button>
        <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Random</button>

    </form>
    </header>

  )
}
export default Search