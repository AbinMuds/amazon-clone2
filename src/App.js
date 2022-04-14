import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Switch>
      <Route to="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
