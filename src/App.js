import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SinglePost from "./pages/SinglePost/SinglePost";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { AppContext } from "./context/AppContext";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const { user } = useContext(AppContext);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/single-post" component={SinglePost} />
          {/* <Route path="/register" component={Register} />
          <Route path="/login" component={Login} /> */}

          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
