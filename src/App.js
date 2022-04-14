import { Route, Switch } from "react-router-dom";
import Layout from "./components/header/Layout";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route to="/">
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
