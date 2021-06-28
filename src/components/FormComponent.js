import React from 'react';
import './FormComponent.css';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iniciado: false,
            error: false,
            mensaje: '',
            tiempoInicial: 0,
            tiempoTranscurrido: 0,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState({
            iniciado: true,
            tiempoInicial: Date.now(),
            tiempoTranscurrido: 0,
        })
    }

    handleChange(event) {
        const fraseEscrita = event.target.value;
        let mensaje = '';
        let error = false;
        if (this.props.frase === fraseEscrita) {
            // hemos terminado
            mensaje = 'Enhorabuena!!! Está correcto';
        } else if (this.props.frase.indexOf(fraseEscrita) === 0) {
            // vamos bien
            mensaje = 'Vas bien';
        } else {
            // vamos mal
            error = true;
            mensaje = 'vas mal';
        }
        this.setState({
            mensaje: mensaje,
            error: error,
            tiempoTranscurrido: (Date.now() - this.state.tiempoInicial) / 1000,
        })
    }

    getMensaje() {
        return (
            this.state.mensaje !== '' &&
            <h2 className={this.state.error ? 'error' : ''}>
                {this.state.mensaje} Llevas {this.state.tiempoTranscurrido} segundos
            </h2>
        )
    }

    render() {
        return (
            <div className="form-component">
                {this.getMensaje()}
                <input
                    disabled={this.state.iniciado ? '' : 'disabled'}
                    onChange={this.handleChange}
                />
                <br />
                <button onClick={this.handleClick}>Empezar</button>
            </div>
        )
    }
}

export default FormComponent;