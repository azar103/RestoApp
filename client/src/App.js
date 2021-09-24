import './App.css';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getCurrentUser } from './Store/actions/authActions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Favorites from './components/Favorites/Favorites';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProtectedRoute from './components/Routes/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <ProtectedRoute path="/favorites" component={Favorites} />
        <ProtectedRoute path="/shopping-cart" component={ShoppingCart}/>
      </Switch>
      <Footer />  
    </BrowserRouter>
  );
}


export default App;
