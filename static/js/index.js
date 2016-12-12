import React from 'react';
import ReactDOM from 'react-dom';

const Elemento = React.createClass({
  getInitialState() {
    return {
      nombre: 'Sammia',
    }
  },
  componentDidMount() {
    let contador = 0;


    setInterval( e => {
      this.setState({
        nombre: this.props.nombres[contador],
      })
      contador++;
      if (contador === 6) {
        contador = 0;
      }
    }, 2000);
  },
  render() {
    return (
      <h1 className="titulo" >Hola {this.state.nombre}!</h1>
    )
  }
});

const nombres = [
      'Pao',
      'Sari',
      'Melissa',
      'Sofía',
      'Sheila',
      'Sammia',
    ];

ReactDOM.render(<Elemento nombres={nombres}/>, document.getElementById('mi-selector-de-id'));
