import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Main } from "./Main";

const App: React.FC = () => {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" render={Main} />
      </Switch>
    </Router>
  );
};

export default App;
