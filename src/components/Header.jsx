import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { mail, total } = this.props;
    return (
      <header>
        <div data-testid="email-field">{mail}</div>
        <div data-testid="total-field">{`Total de despesas: R$${total}`}</div>
      </header>
    );
  }
}
Header.propTypes = {
  mail: PropTypes.string,
  total: PropTypes.string,
}.isRequired;
const mapStateToProps = (state) => ({
  mail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
