import Admin from "./Admin/Admin";
import Dash from "./Dashboard/Dash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import 'tailwindcss/tailwind.css';
import ServiceInfo from "./Dashboard/ServiceInfo";

function App() {
  return (
    <Router>
      <div className="App w-full ">
        <Switch>
          <Route exact path="/" >
            <Dash />
          </Route>
          <Route exact path="/admin" >
            <Admin />
          </Route>
          <Route exact path="/service/:id" >
            <ServiceInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
