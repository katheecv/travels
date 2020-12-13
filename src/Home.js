import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from './Form';

import logo from './imgs/logo.png';

import './home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            airline: "Vivair",
            menu: [
                { id: "1", name: "Vivair" },
                { id: "2", name: "Avianca" },
                { id: "3", name: "Latam" }
            ],
        }
    }

    detectOrientation() {
        let agent = window.navigator.userAgent;
        let devices = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i; //Expresión regular de dispositivos móviles para usar en el match()
        if (agent.match(devices) != null) {
            document.getElementById("menu").style.height = "8rem";
        } else {
            document.getElementById("menu").style.height = "5rem";
        }
    }

    changeAirline = (e) => {
        this.setState({ airline: e.target.innerText });
    }

    componentDidMount() {
        this.detectOrientation();
    }

    render() {
        return (
            <div>
                <div className="Left">
                    <img src={logo} alt="Imagen de avión" width="120rem" className="Logo"></img>
                </div>
                <div id="menu" className="Menu">
                    <ul>
                        {
                            this.state.menu.map((menu, id, name) =>
                                <li key={id} onClick={this.changeAirline}>
                                    {menu.name}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="Body">
                <Row>
                    <Col lg={12}>
                        <br></br>
                        <label className="Welcome">
                            Hola, bienvenido, sabemos que quieres viajar en un
                        </label>
                        <label className="Welcome-Airline"><strong>&nbsp;{this.state.airline},&nbsp;</strong></label>
                        <label className="Welcome">
                            por favor
                            diligencia el siguiente formulario:
                        </label>
                        <Form></Form>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }


}

export default Home;