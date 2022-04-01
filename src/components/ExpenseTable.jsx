import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAction } from '../actions';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidUpdate() {
    const { getTotal } = this.props;
    getTotal();
  }

  deleteItem({ target }) {
    const { expenses, deleteDispatch } = this.props;
    const newExpenses = expenses.filter((expense) => (
      Number(expense.id) !== Number(target.id)
    ));
    deleteDispatch(newExpenses);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {
          expenses.length === 0 ? (
            ''
          ) : (
            <tbody>
              {
                expenses?.map((
                  { id, value, description, currency, method, tag, exchangeRates },
                ) => (
                  <tr key={ id }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{Number(value).toFixed(2)}</td>
                    <td>{(exchangeRates[currency].name).split('/Real Brasileiro')}</td>
                    <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                    <td>{(Number(value) * exchangeRates[currency].ask).toFixed(2)}</td>
                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                      >
                        Editar
                      </button>
                      <button
                        id={ id }
                        type="button"
                        data-testid="delete-btn"
                        onClick={ this.deleteItem }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>))
              }
            </tbody>
          )
        }
      </table>
    );
  }
}

ExpenseTable.propTypes = ({
  expenses: PropTypes.array,
  getTotal: PropTypes.func,
}).isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (value) => dispatch(deleteAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
