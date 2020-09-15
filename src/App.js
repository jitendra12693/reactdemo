import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Home from './components/pages/home';
import  About from './components/pages/about';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUSer from './components/users/AddUser';
import EditUSer from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component = {About}></Route>
        <Route exact path="/contact" component ={Contact}></Route>
        <Route exact path="/users/add" component ={AddUSer}></Route>
        <Route exact path="/users/edit/:id" component={EditUSer} />
        <Route exact path="/users/:id" component={User} />
        <Route component={NotFound}  ></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
