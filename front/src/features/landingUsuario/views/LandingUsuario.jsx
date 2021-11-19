import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

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
                  Dashboard {usuario && usuario.nome} <br />
                </h1>
              </Col>
            </Row>

            <div className="progress-container" style={{ marginTop: "50px" }}>
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
            </div>
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
