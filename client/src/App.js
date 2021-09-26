import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
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
import Admin from './components/Admin/Admin';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [])
  return (
    <BrowserRouter>
      {
        !user.isAdmin ?
          <Header />
          :
        null  
           
      }
          
 
     
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <ProtectedRoute path="/favorites" component={Favorites} />
        <ProtectedRoute path="/shopping-cart" component={ShoppingCart} />
        <ProtectedRoute path="/admin" component={Admin}/>
      </Switch>
      <Footer />  
    </BrowserRouter>
  );
}


export default App;
