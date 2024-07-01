import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Coin2 from "./routes/Coin2";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/v1/:coinId">
          <Coin />
        </Route>
        <Route path="/v2/:coinId">
          <Coin2 />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
