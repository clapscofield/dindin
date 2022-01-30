import React, { useState } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import Datetime from "react-datetime";
import moment from "moment";
import Footer from "components/Footer/Footer.js";
import { connect } from "react-redux";
import InserirGastoGanhoManager from "../InserirGastoGanhoManager";

const InserirInvestimento = (props) => {
  const { usuarioInstituicao } = props;

  const [redirecionar, setRedirecionar] = useState(null);

  const [valorGanho, setValorGanho] = useState(null);
  const [dataGanho, setDataGanho] = useState(null);
  const [categoriaGanho, setCategoriaGanho] = useState(null);
  const [descricaoGanho, setDescricaoGanho] = useState(null);

  const [valor, setValor] = useState(null);
  const [data, setData] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [descricao, setDescricao] = useState(null);

  const inserirGasto = async () => {
    const gasto = {
      data: moment(data).format("DD/MM/YYYY"),
      categoria: categoria,
      valor: valor,
      descricao: descricao,
      usuario: usuarioInstituicao,
      tipo: "saida"
    };

    const resultado = await InserirGastoGanhoManager.inserirGasto(gasto);

    if (resultado) {
      console.log("Criado com sucesso");
      setRedirecionar(<Redirect to={"/landing-usuario"} />);
    }
  };

  const inserirGanho = async () => {
    const ganho = {
      data: moment(dataGanho).format("DD/MM/YYYY"),
      categoria: categoriaGanho,
      valor: valorGanho,
      descricao: descricaoGanho,
      usuario: usuarioInstituicao,
      tipo: "entrada"
    };

    const resultado = await InserirGastoGanhoManager.inserirGanho(ganho);

    if (resultado) {
      console.log("Criado com sucesso");
      setRedirecionar(<Redirect to={"/landing-usuario"} />);
    }
  };

  const validaData = (currentDate) => {
    var hoje = moment(new Date());
    var maxDate = moment("2023-01-01");
    return (
      currentDate.isBefore(moment(maxDate)) && currentDate.isAfter(moment(hoje))
    );
  };

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col>
                  <h1 className="title">Novo Ganho</h1>
                  <Form className="form">
                    <Row>
                      <Col>
                        <Input
                          value={valorGanho}
                          placeholder="Inserir valor"
                          type="text"
                          onChange={(e) => setValorGanho(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                      <Col className={"mb-4"}>
                        <Datetime
                          value={dataGanho}
                          timeFormat={false}
                          inputProps={{ placeholder: "Data" }}
                          dateFormat={"DD/MM/YYYY"}
                          onChange={(e) => setDataGanho(e)}
                          isValidDate={validaData}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className={"mb-4"}>
                        <Input
                          value={categoria}
                          placeholder="Categoria"
                          type="text"
                          onChange={(e) => setCategoriaGanho(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                      <Col className={"mb-4"}>
                        <Input
                          value={descricaoGanho}
                          placeholder="Descrição"
                          type="text"
                          onChange={(e) => setDescricaoGanho(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                    <Button
                      size="sm"
                      className="btn-round mb-4"
                      color="primary"
                      type="button"
                      onClick={inserirGanho}
                    >
                      Inserir ganho
                    </Button>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 className="title">Novo Gasto</h1>
                  <Form className="form">
                    <Row>
                      <Col>
                        <Input
                          value={valor}
                          placeholder="Inserir valor"
                          type="text"
                          onChange={(e) => setValor(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                      <Col className={"mb-4"}>
                        <Datetime
                          value={data}
                          timeFormat={false}
                          inputProps={{ placeholder: "Data" }}
                          dateFormat={"DD/MM/YYYY"}
                          onChange={(e) => setData(e)}
                          isValidDate={validaData}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className={"mb-4"}>
                        <Input
                          value={categoria}
                          placeholder="Categoria"
                          type="text"
                          onChange={(e) => setCategoria(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                      <Col className={"mb-4"}>
                        <Input
                          value={descricao}
                          placeholder="Descrição"
                          type="text"
                          onChange={(e) => setDescricao(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                    <Button
                      size="sm"
                      className="btn-round mb-4"
                      color="primary"
                      type="button"
                      onClick={inserirGasto}
                    >
                      Inserir gasto
                    </Button>
                  </Form>
                </Col>
              </Row>
              <div className="register-bg" />
            </Container>
          </div>
        </div>
        <Footer />
        {redirecionar}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usuarioInstituicao: state.auth && state.auth.user.usuario
  };
};

export default connect(mapStateToProps)(InserirInvestimento);
