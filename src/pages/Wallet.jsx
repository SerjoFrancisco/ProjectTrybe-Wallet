import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getCurrencies from '../Helpers/apiFunctions';
import walletAction from '../actions/wallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      expenses: [],
    };
  }

  async componentDidMount() {
    const { walletDispatch } = this.props;
    const currencies = await getCurrencies();
    this.setState({ currencies }, () => walletDispatch(currencies));
  }

  render() {
    return (
      <div>
        <Header />

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
