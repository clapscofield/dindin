import React, { useEffect } from "react";
import { Row, Col, Container, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import { Progress } from "reactstrap";
import InserirGastoGanhoManager from "features/inserirGastoGanho/InserirGastoGanhoManager";

// core components
import LandingUsuarioNavbar from "components/Navbars/LandingUsuarioNavbar.js";
import Footer from "components/Footer/Footer.js";

const LandingUsuario = (props) => {
  const { usuario } = props;

  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const obterTransacoes = async () => {
    const resultado = await InserirGastoGanhoManager.listar(usuario);
    if (resultado) {
      console.log("dados obtidos", resultado);
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
                  <th className="text-right">Valor</th>
                  <th>Descrição</th>
                  <th>Categoria</th>
                  <th className="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>Andrew Mike</td>
                  <td>Develop</td>
                  <td className="text-center">2013</td>
                  <td className="text-right">€ 99,225</td>
                  <td className="text-right">
                    <Button className="btn-icon" color="info" size="sm">
                      <i className="fa fa-user"></i>
                    </Button>
                    {` `}
                    <Button className="btn-icon" color="success" size="sm">
                      <i className="fa fa-edit"></i>
                    </Button>
                    {` `}
                    <Button className="btn-icon" color="danger" size="sm">
                      <i className="fa fa-times" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td>Manuel Rico</td>
                  <td>Manager</td>
                  <td className="text-center">2012</td>
                  <td className="text-right">€ 99,201</td>
                  <td className="text-right">
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      size="sm"
                    >
                      <i className="fa fa-user"></i>
                    </Button>
                    {` `}
                    <Button
                      className="btn-icon btn-round"
                      color="success"
                      size="sm"
                    >
                      <i className="fa fa-edit"></i>
                    </Button>
                    {` `}
                    <Button
                      className="btn-icon btn-round"
                      color="danger"
                      size="sm"
                    >
                      <i className="fa fa-times" />
                    </Button>
                    {` `}
                  </td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td>Alex Mike</td>
                  <td>Designer</td>
                  <td className="text-center">2012</td>
                  <td className="text-right">€ 99,201</td>
                  <td className="text-right">
                    <Button
                      className="btn-icon btn-simple"
                      color="info"
                      size="sm"
                    >
                      <i className="fa fa-user"></i>
                    </Button>
                    {` `}
                    <Button
                      className="btn-icon btn-simple"
                      color="success"
                      size="sm"
                    >
                      <i className="fa fa-edit"></i>
                    </Button>
                    {` `}
                    <Button
                      className="btn-icon btn-simple"
                      color="danger"
                      size="sm"
                    >
                      <i className="fa fa-times" />
                    </Button>
                    {` `}
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* <div className="progress-container" style={{ marginTop: "50px" }}>
              <span className="progress-badge">Dany</span>
              <Progress max="100" value="25">
                <span className="progress-value">15%</span>
              </Progress>
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">Arya</span>
              <Progress
                max="100"
                value="60"
                barClassName="progress-bar-primary"
              >
                <span className="progress-value">7.5%</span>
              </Progress>
            </div>
            <div className="progress-container progress-danger">
              <span className="progress-badge">Tyrion</span>
              <Progress max="100" value="50" barClassName="progress-bar-danger">
                <span className="progress-value">7.5%</span>
              </Progress>
            </div>
            <div className="progress-container progress-warning">
              <span className="progress-badge">Yara</span>
              <Progress
                max="100"
                value="77"
                barClassName="progress-bar-warning"
              >
                <span className="progress-value">10%</span>
              </Progress>
            </div>
            <div className="progress-container progress-success">
              <span className="progress-badge">Loras</span>
              <Progress
                max="100"
                value="46"
                barClassName="progress-bar-success"
              >
                <span className="progress-value">50%</span>
              </Progress>
            </div>
            <div className="progress-container progress-info">
              <span className="progress-badge">Robert</span>
              <Progress max="100" value="90" barClassName="progress-bar-info">
                <span className="progress-value">1.25%</span>
              </Progress>
            </div> */}
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
    usuario: state.auth && state.auth.user
  };
};

export default connect(mapStateToProps)(LandingUsuario);
