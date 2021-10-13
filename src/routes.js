import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
