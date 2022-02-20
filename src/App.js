import Settings from "./views/Settings/Settings";
import History from "./views/History/History";
import PanelNumbers from "./views/PanelNumbers/PanelNumbers";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link
                to="/Settings"
                style={{ color: "black", textDecoration: "none" }}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/History"
                style={{ color: "black", textDecoration: "none" }}
              >
                History
              </Link>
            </li>
            <li>
              <Link
                to="/PanelNumbers"
                style={{ color: "black", textDecoration: "none" }}
              >
                PanelNumbers
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route path="/History">
            <History />
          </Route>
          <Route path="/PanelNumbers">
            <PanelNumbers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
