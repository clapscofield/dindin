import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import PaginaInicial from "features/paginaInicial";
import CadastroUsuario from "features/cadastroUsuario";
import LandingUsuario from "features/landingUsuario";
import InserirGastoGanho from "features/inserirGastoGanho";
import InserirInvestimento from "features/inserirInvestimento";
import VisualizarInvestimentos from "features/visualizarInvestimentos/views/visualizarInvestimentos";

const App = props => {
  return (
    <Router>
      <Switch>
        <Route path="/pagina-inicial" render={(props) => <PaginaInicial {...props} />} />
        <Route path="/cadastro-usuario" render={(props) => <CadastroUsuario {...props} />} />
        <Route path="/landing-usuario" render={(props) => <LandingUsuario {...props} />} />
        <Route path="/inserir-gasto-ganho" render={(props) => <InserirGastoGanho {...props} />} />
        <Route path="/inserir-investimento" render={(props) => <InserirInvestimento {...props} />} />
        <Route path="/visualizar-investimentos" render={(props) => <VisualizarInvestimentos {...props} />} />
        <Redirect from="/" to="/pagina-inicial" />
      </Switch>
    </Router>
  );
};

export default App;