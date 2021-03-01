import React from 'react'
import '../assets/estilos/Login.css'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component {
  state={
    abierto: false,
  }
    
  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }
    
  render(){
        
    return(
    <div>

        <section className="login">
          <section className="login__container">
            <div> 
              <form className="login__container--form">
                <img className="login__container--logo" src="http://www.techk.cl/img/tech-k-logo.svg" alt=""/>
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar sesión</button>
                <p className="login__container--register">No tienes ninguna cuenta <span onClick={this.abrirModal}>Regístrate</span></p>
              </form>
            </div>
            <img className="login__container--poster" src="https://wallpaperaccess.com/full/311268.jpg" alt="poster" />      
          </section>
        </section>
        <Modal isOpen={this.state.abierto}>
        <ModalHeader>
          Registrarse
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Email</Label>
            <Input type="text" id="email"/> 
          </FormGroup>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input type="text" id="password"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={this.abrirModal}>Registrarse</Button>
          <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
)
}
}
export default Login;
