// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, GET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.value,
    };
  case GET_EXPENSES:
    console.log(action.value);
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  default:
    return { ...state };
  }
};

export default wallet;
