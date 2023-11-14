import { useContext, createContext, useEffect, useState } from 'react';
import Axios from 'axios';

const AppContext = createContext();

const allMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?f='
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php'


const getFavorite = () => {
  let favorite = localStorage.getItem('favorite')
  if (favorite) {
    favorite = JSON.parse(localStorage.getItem('favorite'))
  } else {
    favorite = [];
  }
  return favorite
}



const AppProvider = ({children}) => {

  const [loading, SetLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setshowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorite, setFavorite] = useState(getFavorite());


  const closeModal = () => {
    setshowModal(false)
  }

  const addToFavorite = (idMeal) => {
    const meal = meals.find((meal) => {
      return meal.idMeal === idMeal
    })
    const alreadyFavorite = favorite.find((fav) => {
      return fav.idMeal === idMeal
    })
    if (alreadyFavorite) {
      return
    }
    const updateFavorite = [...favorite, meal]
    setFavorite(updateFavorite)
    localStorage.setItem('favorite', JSON.stringify(updateFavorite))
  }
  const removeFromFavorite = (idMeal) => {
    const updateFavorite = favorite.filter((fav) => {
      return fav.idMeal !== idMeal
    })
    localStorage.setItem('favorite', JSON.stringify(updateFavorite))
  }



  const fetchMeal = async (url) => {
    SetLoading(true)
    try {
      const {data} = await Axios.get(url);
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([]);
      }

    } catch (e) {
      console.log(e.response)
    }
    SetLoading(false)
  }

  const fetchRandomMeal = () => {
    fetchMeal(randomMeal)
  }

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favorite.find((meal) => {
        return meal.idMeal === idMeal
      })
    } else {
      meal = meals.find((meal) => {
        return meal.idMeal === idMeal
      })
    }
    setSelectedMeal(meal)
    setshowModal(true)
  }

  useEffect(() => {
    fetchMeal(allMeals)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeal(`${allMeals}${searchTerm}`);
  }, [searchTerm])

  return (
    <AppContext.Provider value={{
      meals,
      loading,
      setSearchTerm,
      fetchRandomMeal,
      showModal,
      selectedMeal,
      selectMeal,
      closeModal,
      addToFavorite,
      favorite,
      removeFromFavorite
    }}> 
     {children}
    </AppContext.Provider>
  )
}

export const useGlobal = () => {
  return ( useContext(AppContext))
}


export { AppContext, AppProvider }