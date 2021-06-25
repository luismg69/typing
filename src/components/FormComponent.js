import React from 'react';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iniciado: false,
            error: false,
            mensaje: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState({
            iniciado: true,
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
        })
    }

    render() {
        return (
            <div className="form-component">
                <h2>{this.state.mensaje}</h2>
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