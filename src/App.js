import History from "./views/History/History";
import PanelNumbers from "./views/PanelNumbers/PanelNumbers";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/History">History</Link>
            </li>
            <li>
              <Link to="/PanelNumbers">PanelNumbers</Link>
            </li>
          </ul>
        </nav>
        <Switch>
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
