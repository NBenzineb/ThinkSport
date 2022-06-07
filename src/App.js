import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";


import Myworkouts from "./components/myworkouts";
import Workouts from "./components/workouts";


import Login from './components/login';
import SignUp from './components/signup';


import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
 
  return (
    <div className="App">
      <p>THis is working!</p>
      <Provider store={store}>

      <Router>
      <Navbar />
      <div className="container">
        
          <Route exact path="/workouts" element={<Workouts/>} />
          <Route exact path="/myworkouts" element={<Myworkouts/>} />
          <Route exact path="/signin" element={<Login/>} />
          <Route exact path="/sign-up" element={<Myworkouts/>} />
          <Route exact path="/" element={<ExercisesList/>} />
          <Route exact path="/edit/:id" element={<EditExercise/>} />
          <Route exact path="/create" element={<CreateExercise/>} />
          <Route exact path="/user" element={<CreateUser/>} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
      </Router>
      </Provider>
    </div>
  );
}

export default App;



