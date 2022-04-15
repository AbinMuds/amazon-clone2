import { Route, Switch } from "react-router-dom";
import Layout from "./components/header/Layout";
import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
