import React, { Component } from 'react'

class Form extends Component {
    state = {
      estadoFavorito: '',
      vaiComparecer: false,
      idade: 0,
      email: ''
    };



  handleChange = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    });
  }

  render() {
      const { estadoFavorito, vaiComparecer, idade, email  } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={ estadoFavorito } onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
            onChange={this.handleChange}
            value={ idade }
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={ vaiComparecer }
            onChange={this.handleChange}
          />

          <select name="" id="" onChange={this.handleChange}>
              <option value=""></option>
          </select>

          <input type="email" name="" id="" onChange={this.handleChange} value={ email } />
        </form>
      </div>
    );
  }
}

export default Form;