import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
