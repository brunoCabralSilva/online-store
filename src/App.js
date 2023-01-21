import './App.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartShopping from './pages/CartShopping';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/cartShopping" component={ CartShopping } />
      <Route path="/productDetails/:id" component={ ProductDetails } />
      <Route path="/checkout" component={ Checkout } />
    </Switch>
  );
}

export default App;
