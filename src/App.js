import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/header";
import { routes } from "./config";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return (
              <Route exact path={route.path} component={route.component} />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
}
