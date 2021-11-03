import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import PaginaInicial from "features/paginaInicial";

const App = props => {
  return (
    <Router>
      <Switch>
        <Route path="/pagina-inicial" render={(props) => <PaginaInicial {...props} />} />
        <Redirect from="/" to="/pagina-inicial" />
      </Switch>
    </Router>
  );
};

export default App;