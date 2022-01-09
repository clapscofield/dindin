import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import { Progress } from "reactstrap";
import InserirGastoGanhoManager from "features/inserirGastoGanho/InserirGastoGanhoManager";

// core components
import LandingUsuarioNavbar from "components/Navbars/LandingUsuarioNavbar.js";
import Footer from "components/Footer/Footer.js";

const LandingUsuario = (props) => {
  const { usuario } = props;

  const [transacoes, setTransacoes] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const obterTransacoes = async () => {
    const user = usuario;

    const resultado = await InserirGastoGanhoManager.listarEntradas(user);

    if (resultado) {
      console.log("dados obtidos", resultado);
      setTransacoes(resultado);
    }
  };

  //obter ultimos dados
  useEffect(() => {
    obterTransacoes();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <Container className="align-items-center justify-content-left">
            <LandingUsuarioNavbar />
            <Row>
              <Col>
                <h1 className="text-white mt-10" style={{ marginTop: "100px" }}>
                  Transações {usuario && usuario.nome} <br />
                </h1>
              </Col>
            </Row>
            <Table responsive>
              <thead>
                <tr>
                  <th className="text-center">#id</th>
                  <th>Tipo</th>
                  <th className="text-center">Data</th>
                  <th>Valor</th>
                  <th>Descrição</th>
                  <th>Categoria</th>
                  <th className="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {transacoes &&
                  transacoes.map(
                    ({ _id, tipo, data, valor, descricao, categoria }) => (
                      <tr key={_id}>
                        <td className="text-center">{_id}</td>
                        <td>{tipo}</td>
                        <td>{data}</td>
                        <td>{valor}</td>
                        <td>{descricao}</td>
                        <td>{categoria}</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="success"
                            size="sm"
                          >
                            <i className="fa fa-edit"></i>
                          </Button>
                          {` `}
                          <Button className="btn-icon" color="danger" size="sm">
                            <i className="fa fa-times" />
                          </Button>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </Table>
          </Container>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usuario: state.auth && state.auth.user.usuario
  };
};

export default connect(mapStateToProps)(LandingUsuario);
