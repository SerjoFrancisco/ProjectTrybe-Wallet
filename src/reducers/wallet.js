// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    console.log(action.value);
    return {
      ...state,
      currencies: action.value,
    };
  default:
    return { ...state };
  }
};

export default wallet;
