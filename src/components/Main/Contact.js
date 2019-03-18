import React from 'react';

import InputMask from 'react-input-mask';

import {Alert, Button} from 'react-bootstrap';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = { show: true };
      }
    render(){

        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });

        return (
            <div className="formulario" id="contact">
                <>
                    <Alert show={this.state.show} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
                        amet fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleHide} variant="outline-success">
                        Close me ya'll!
                        </Button>
                    </div>
                    </Alert>

                    {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
                </>

                <h1>Fale Conosco</h1>
                <br/>
                <form name="form1" id="form1" method="post" action="/controllers/controllerForm.php">
                    <input type="text" name="nome" id="nome" placeholder="Nome"/>
                    <InputMask type="tel" name="telefone" id="telefone" placeholder="Telefone" mask="(99)99999-9999" maskChar=" " />
                    <input type="email" name="email" id="email" placeholder="E-mail"/>
                    <textarea name="mensagem" id="mensagem" placeholder="Mensagem"></textarea>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        )
    }
}