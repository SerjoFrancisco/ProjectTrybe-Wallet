// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_FORM':
    console.log(action.value);
    return { ...state, ...action.value };

  default:
    return state;
  }
};

export default reducer;
