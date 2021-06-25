
import React from 'react';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header-component">
                La frase es
                <h1>{this.props.frase}</h1>
            </div>
        )
    }
}

export default HeaderComponent;