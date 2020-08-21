import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

//Components
import Header from './Components/Header/Header.js';
import ProductList from './Components/ProductList/ProductList';
import Menu from './Components/Menu/Menu';
import CartDialog from './Components/CartDialog/CartDialog';
import Details from './Components/Details/Details';
import Order from './Components/Order/Order';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Footer from './Components/Footer/Footer';
import signInOrSignUp from './Components/Login and SignUP/SignInAndSignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Menu />
            <div className="content">
              <CartDialog />
              <Switch>
                <Route path="/signInOrSignUp" component={signInOrSignUp} />
                <Route path="/" component={ProductList} />
                <Route path="/details/:id" component={Details} />
                <ProtectedRoute path="/order" component={Order} />
                <Route
                  component={() => (
                    <div style={{ padding: 20 }}>Page not found</div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={() =>
                    this.props.currentUser ? (
                      <Redirect to="/" />
                    ) : (
                      <signInOrSignUp />
                    )
                  }
                />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
