import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/v1/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
