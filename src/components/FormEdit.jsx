import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAction } from '../actions';

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.editItem = this.editItem.bind(this);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    this.getExpenses();
  }

  getExpenses = () => {
    const { id, expenses } = this.props;
    expenses.forEach((expense, i) => {
      if (Number(expense.id) === Number(id)) {
        this.setState({ ...expenses[i] });
      }
    });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  editItem() {
    const { expenses, deleteDispatch, editNo } = this.props;
    const { id } = this.state;
    expenses.forEach((expense, i) => {
      if (Number(expense.id) === Number(id)) {
        expenses[i] = this.state;
      }
    });
    deleteDispatch(expenses);
    editNo();
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    return (
      <form action="">
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
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
        <label name="moeda" htmlFor="moeda">
          Moeda:
          <select
            name="currency"
            data-testid="currency-input"
            id="moeda"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((money) => (
              <option key={ money } value={ money }>{money}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          method:
          <select
            data-testid="method-input"
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select
            name="tag"
            data-testid="tag-input"
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          id={ exchangeRates }
          onClick={ this.editItem }
        >
          Editar despesa

        </button>
      </form>
    );
  }
}
FormEdit.propTypes = ({
  expenses: PropTypes.array,
}).isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (value) => dispatch(deleteAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
