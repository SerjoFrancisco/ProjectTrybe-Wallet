// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_WALLET':
    console.log(action.value);
    return {
      ...state,
      currencies: action.value,
      expenses: action.value.expenses,
    };
  default:
    return state;
  }
};

export default reducer;
