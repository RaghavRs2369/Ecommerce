import { Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Signin from './pages/Signin';
import Categories from './components/Categories';
import Tshirts from "./components/page/Tshirts";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Cat" element={<Categories/>}/>
          <Route path="/Tshirts" element={<Tshirts/>} />
        </Routes>
    </Router>
  )
};

export default App;