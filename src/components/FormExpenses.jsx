import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueinput: '',
      description: '',
    };
  }

      handleChange = ({ target: { value, name } }) => {
          console.log(value);
        this.setState({ [name]: value });
      }

      render() {
        const { currencies } = this.props;
        const { valueinput, description } = this.state;
        return (
          <form action="">
            <label htmlFor="valueinput">
              Valor:
              <input
                data-testid="value-input"
                type="text"
                name="valueinput"
                value={ valueinput }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="description">
              Descrição:
              <textarea
                data-testid="description-input"
                name="description"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="Moeda">
              <select name="Moeda" id="Moeda"  onChange={ this.handleChange }>
                {currencies.map((money) => (
                  <option key={ money } value={ money }>{money}</option>
                ))}

              </select>
            </label>
            <label htmlFor="method">
              <select data-testid="method-input" name="method" onChange={ this.handleChange }>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de crédito">Cartão de crédito</option>
                <option value="Cartão de débito">Cartão de débito</option>
              </select>
            </label>
            <label htmlFor="category">
              <select name="category" id="category" onChange={ this.handleChange }>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Transporte">Transporte</option>
                <option value="Saúde">Saúde</option>
              </select>
            </label>
          </form>
        );
      }
}
FormExpenses.propTypes = {
  currencies: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormExpenses);