import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenseAction } from '../actions';
import { getValues } from '../Helpers/apiFunctions';

class FormExpenses extends Component {
  constructor(props) {
    super(props);
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

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

       handleSubmit = async () => {
         const { formDispatch, getTotal } = this.props;
         const exchangeRates = await getValues();
         this.setState({ exchangeRates }, () => formDispatch(this.state));
         let { id } = this.state;
         this.setState({ id: id += 1, value: '' }, () => getTotal());
       }

       render() {
         const { currencies } = this.props;
         const { value, description, moeda, method, tag } = this.state;
         return (
           <form action="">
             <label htmlFor="value">
               Valor:
               <input
                 data-testid="value-input"
                 type="text"
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
                 value={ moeda }
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
               onClick={ this.handleSubmit }
             >
               Adicionar despesa

             </button>
           </form>
         );
       }
}
FormExpenses.propTypes = {
  currencies: PropTypes.array,
  formDispatch: PropTypes.func,
  getTotal: PropTypes.func,
}.isRequired;
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  formDispatch: (value) => dispatch(expenseAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
