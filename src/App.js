import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/header/Layout";
import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckoutPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/amazon-clone2" exact>
          <Home />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
