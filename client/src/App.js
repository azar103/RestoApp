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
import Users from './components/Admin/Users/Users';
import Foods from './components/Admin/Foods/Foods';
import AddFood from './components/Admin/AddFood/AddFood';
import EditFood from './components/Admin/EditFood/EditFood';
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
        <ProtectedRoute path="/shopping-cart" component={ShoppingCart} />

        <ProtectedRoute path="/admin/users" component={Users} />
        <ProtectedRoute path="/admin/foods" component={Foods} />
        <ProtectedRoute path="/admin/createFood" component={AddFood} />
        <ProtectedRoute path="/admin/editFood/:_id" component={EditFood}/>
      </Switch>
      <Footer />  
    </BrowserRouter>
  );
}


export default App;
