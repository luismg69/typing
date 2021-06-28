import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom'

class InstruccionesComponent extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/instrucciones/objetivo">Objetivo</Link></li>
                        <li><Link to="/instrucciones/tiempo">Tiempo</Link></li>
                        <li><Link to="/instrucciones/fin">Fin</Link></li>
                    </ul>
                </nav>
                <div className="instrucciones-component">
                    <h1>Instrucciones del juego</h1>
                    <Switch>
                        <Route path="/instrucciones/objetivo">
                            <h2>Objetivo del juego</h2>
                            <p>Se trata de repetir la frase</p>
                        </Route>
                        <Route path="/instrucciones/tiempo">
                            <h2>Medición del tiempo</h2>
                            <p>Se va midiendo el tiempo desde que se pulsa empezar</p>
                        </Route>
                        <Route path="/instrucciones/fin">
                            <h2>Fin del juego</h2>
                            <p>Termina cuando se escribe correctamente la frase</p>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default InstruccionesComponent;