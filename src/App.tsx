import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Main } from "./Main";

const App: React.FC = () => {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/beanies" render={() => <div>Beanies</div>} />
        <Route path="/facemasks" render={() => <div>Facemasks</div>} />
        <Route path="/gloves" render={() => <div>Gloves</div>} />
      </Switch>
    </Router>
  );
};

export default App;
