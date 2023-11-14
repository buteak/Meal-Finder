
import Favourite from "./Components/Favourite";
import Meal from "./Components/Meal";
import Modal from "./Components/Modal";
import Search from "./Components/Search";
import { useGlobal } from "./Context/Context";

function App() {
  const {showModal, favorite} = useGlobal();
  return (
    <div className="App">
      <header className="App-header">
         <Search/>
        {favorite.length > 0 && <Favourite />}
        <Meal />
        {showModal && <Modal/>}
         
        
      
      </header>
    </div>
    );
}

export default App;
