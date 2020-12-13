import React from 'react';
import { Alert, Button, ButtonGroup, FormControl, Row, Col } from 'react-bootstrap';

import './form.css';

var validator = require("validator");

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: "",
                email: "",
                phone: "",
                age: "",
            }
        }
    }

    handleChangeName = (e) => {
        this.hideAlerts();
        let temp = this.state.form;
        temp.name = e.target.value;
        this.setState({ form: temp });
    }

    handleChangeEmail = (e) => {
        this.hideAlerts();
        let temp = this.state.form;
        temp.email = e.target.value;
        this.setState({ form: temp });
    }

    handleChangePhone = (e) => {
        this.hideAlerts();
        let temp = this.state.form;
        temp.phone = e.target.value;
        this.setState({ form: temp });
    }

    handleChangeAge = (e) => {
        this.hideAlerts();
        this.changeColor(e.target.id);
        let temp = this.state.form;
        temp.age = e.target.innerText;
        this.setState({ form: temp });
    }

    changeColor(id) {
        this.cleanColors();
        document.getElementById(id).style.backgroundColor = "#7589CE60";
    }

    cleanColors() {
        for (var i = 1; i <= 5; i++) {
            document.getElementById(i).style.backgroundColor = "#f8f9fa";
        }
    }

    sendInformation = () => {
        if (this.state.form.name != "" && validator.isEmail(this.state.form.email) != false && this.state.form.phone != "" && this.state.form.age != "") {
            document.getElementById("alertSuccess").style.display = ""; 
            setTimeout(function(){ document.getElementById("alertSuccess").style.display = "none"; }, 5000);
            console.log(this.state.form);
            let tempForm = this.state.form;
            tempForm.name = "";
            tempForm.email = "";
            tempForm.phone = "";
            tempForm.age = "";
            this.setState({ form: tempForm });
            this.cleanColors();
        } else {
            document.getElementById("alertWarning").style.display = "";
        }

    }

    hideAlerts() {
        document.getElementById("alertSuccess").style.display = "none";
        document.getElementById("alertWarning").style.display = "none";
    }

    componentDidMount() {
        this.hideAlerts();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <Alert variant="success" style={{ width: "100%" }} id="alertSuccess">Tu información fue enviada con éxito, estaremos en contacto contigo</Alert>
                        <Alert variant="warning" style={{ width: "100%" }} id="alertWarning">Por favor verifica que hayas llenado todos los campos correctamente</Alert>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
                <Row>
                    <Col lg={4}></Col>
                    <Col lg={4}>
                        <div className="Form">
                            <div className="form-inline">
                                <label>Nombre completo*&nbsp;</label><FormControl style={{ width: "30rem" }} onChange={this.handleChangeName} value={this.state.form.name} />
                            </div>
                            <br></br>
                            <div className="form-inline">
                                <label>Correo electrónico*&nbsp;</label><FormControl style={{ width: "30rem" }} onChange={this.handleChangeEmail} value={this.state.form.email} />
                            </div>
                            <br></br>
                            <div className="form-inline">
                                <label>Número de celular*&nbsp;</label><FormControl style={{ width: "30rem" }} onChange={this.handleChangePhone} value={this.state.form.phone} />
                            </div>
                            <br></br>
                            <div className="form-inline">
                                <label>Selecciona tu rango de edad*&nbsp;</label><br></br>
                            </div>
                            <ButtonGroup aria-label="First group">
                                <Button name="button" variant="light" onClick={this.handleChangeAge} id="1">20-30 años</Button>{' '}
                                <Button name="button" variant="light" onClick={this.handleChangeAge} id="2">31-40 años</Button>{' '}
                                <Button name="button" variant="light" onClick={this.handleChangeAge} id="3">41-50 años</Button>{' '}
                                <Button name="button" variant="light" onClick={this.handleChangeAge} id="4">51-60 años</Button>{' '}
                                <Button name="button" variant="light" onClick={this.handleChangeAge} id="5">Mayor de 60 años</Button>{' '}
                            </ButtonGroup>
                            <br></br>
                            <hr></hr>
                            <Button variant="info" style={{ width: "10rem" }} onClick={this.sendInformation}>Enviar</Button>
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </div >
        );
    }


}

export default Form;