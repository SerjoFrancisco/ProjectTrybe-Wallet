import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { mail } = this.props;
    return (
      <header>
        <div data-testid="email-field">{mail}</div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}
Header.propTypes = {
  mail: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  mail: state.user.email,
});

export default connect(mapStateToProps)(Header);
