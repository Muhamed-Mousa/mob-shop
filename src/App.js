import  React  from 'react';

// import { Switch, Route, Redirect} from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'


import Navbar from './pages/Navebar/navbar.component';
import About from './components/About/about.component';
import Contact from './components/Contact/contact.component';
import Funtouch from './components/Functouch/funtouch.component';
import Home from './components/Homepae/home.component';
import Product from './components/Products/product.component';
import ShoppingPlaces from './components/Shoppingplaces/shoppingPlaces.component';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/functouch" component={Funtouch}/>
        <Route path="/shoppingPlaces" component={ShoppingPlaces}/>
        <Route path="/product" component={Product}/>
        <Route path="/" component={Home}/>
        <Redirect from="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
