import './App.css';
import ComponentCategories from './common/ComponentCategories/ComponentCategories';
import ComponentLowerNav from './common/ComponentLowerNav/ComponentLowerNav';
import ComponentNavbar from './common/ComponentNavbar/ComponentNavbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <div>
      <ComponentNavbar/>
      <ComponentLowerNav/>
      <ComponentCategories/>
      <Home/>
    </div>
  )
}

export default App
