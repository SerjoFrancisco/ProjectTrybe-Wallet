import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getCurrencies } from '../Helpers/apiFunctions';
import { currenciesAction } from '../actions';
import FormExpenses from '../components/FormExpenses';
import ExpenseTable from '../components/ExpenseTable';
import FormEdit from '../components/FormEdit';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      edit: false,
      id: 0,
    };
    this.createCurrencies = this.createCurrencies.bind(this);
  }

  componentDidMount() {
    this.createCurrencies();
    this.getTotal();
  }

editClick = ({ target: { id } }) => {
  this.setState({ edit: true, id });
}

editNo = () => {
  this.setState({ edit: false });
}

  getTotal = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((expense) => {
      const { exchangeRates, currency, value } = expense;
      const gasto = Number(value) * Number(exchangeRates[currency].ask);
      total += gasto;
    });
    total = parseFloat(total).toFixed(2);
    this.setState({ total });
  }

  async createCurrencies() {
    const { walletDispatch } = this.props;
    const currencies = await getCurrencies();
    walletDispatch(currencies);
  }

  render() {
    const { total, edit, id } = this.state;
    return (
      <div>
        <Header total={ total } />
        {edit ? (
          <FormEdit
            id={ id }
            editNo={ this.editNo }
          />
        ) : (
          <FormExpenses getTotal={ this.getTotal } />
        )}

        <ExpenseTable
          getTotal={ this.getTotal }
          editClick={ this.editClick }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  walletDispatch: (value) => dispatch(currenciesAction(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = ({
  walletDispatch: PropTypes.func,
  expenses: PropTypes.string,
}).isRequired;
