import React, { useEffect, useState } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import Datetime from "react-datetime";
import moment from "moment";
import Footer from "components/Footer/Footer.js";
//import CriacaoGuerraEstudosManager from "../CriacaoGuerraEstudosManager";
import { inserirEquipe } from "../../../redux/actionCreators";
import { connect } from "react-redux";

const InserirGastoGanho = (props) => {
  const { usuarioInstituicao, inserirEntrada } = props;

  const [redirecionar, setRedirecionar] = useState(null);
  const [botaoHabilitado, setBotaoHabilitado] = useState(true);

  const [valor, setValor] = useState(null);
  const [data, setData] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [descricao, setDescricao] = useState(null);

  useEffect(() => {
    setBotaoHabilitado(valor && categoria && data);
  }, [setBotaoHabilitado, valor, categoria, data]);

  // const criarEquipes = async () => {
  //   await Promise.all(
  //     nomeEquipes.equipes.map(async (i) => {
  //       const equipe = {
  //         idEquipe: i,
  //         usuarioInstituicao: usuarioInstituicao,
  //         idGuerra: idGuerra
  //       };
  //       return await CriacaoGuerraEstudosManager.criarEquipe(equipe);
  //     })
  //   );
  // };

  // const criarGuerraEstudos = async () => {
  //   const guerraEstudos = {
  //     dataInicio: moment(dataInicio).format("DD/MM/YYYY"),
  //     dataFim: moment(dataFim).format("DD/MM/YYYY"),
  //     identificador: idGuerra,
  //     numeroAlunosPorEquipe: numeroAlunosPorEquipe,
  //     idInstituicao: usuarioInstituicao
  //   };

  //   const resultadoEquipes = criarEquipes();

  //   const resultado = await CriacaoGuerraEstudosManager.criarGuerraEstudos(
  //     guerraEstudos
  //   );

  //   /* Nome equipes salvo no redux */
  //   nomeEquipes && inserirEquipe(nomeEquipes);

  //   if (resultado && resultadoEquipes) {
  //     console.log("Criado com sucesso");
  //     setRedirecionar(<Redirect to={"/cadastro-aluno"} />);
  //   }
  // };

  // function handleChange(event) {
  //   let vals = [...nomeEquipes.equipes];
  //   vals[this] = event.target.value;
  //   setNomeEquipes({ equipes: vals });
  // }

  const validaData = (currentDate) => {
    var hoje = moment(new Date());
    var maxDate = moment("2022-01-01");
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
                      //onClick={addClick}
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
                      //onClick={addClick}
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

const mapDispatchToProps = (dispatch) => {
  return {
    inserirEntrada: (entrada) => dispatch(inserirEquipe(entrada))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InserirGastoGanho);
