import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, () => this.validateForm());
  }

  validateForm = () => {
    const { email, password } = this.state;
    const minLength = 6;
    const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validateEmail = regEx.test(email);
    if (password.length >= minLength && validateEmail) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleSubmit = () => {
    const { email } = this.state;
    const { history, userDispatch } = this.props;
    userDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="login-container">
        Login

        <form>

          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Digite um Email válido"
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              placeholder="Senha de ao menos 6 digitos"
            />
          </label>
          <button
            type="submit"
            disabled={ isDisabled }
            onClick={ this.handleSubmit }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (value) => dispatch(userAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = ({
  userDispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}).isRequired;
