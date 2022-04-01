import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getCurrencies from '../Helpers/apiFunctions';
import { walletAction } from '../actions';
import FormExpenses from '../components/FormExpenses';

class Wallet extends React.Component {
  constructor() {
    super();
    this.createCurrencies = this.createCurrencies.bind(this);
  }

  componentDidMount() {
    this.createCurrencies();
  }

  async createCurrencies() {
    const { walletDispatch } = this.props;
    const currencies = await getCurrencies();
    walletDispatch(currencies);
  }

  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  walletDispatch: (value) => dispatch(walletAction(value)),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = ({
  walletDispatch: PropTypes.func,
}).isRequired;
