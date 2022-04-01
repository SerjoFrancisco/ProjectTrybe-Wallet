// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_USER':
    console.log(action.value);
    return {
      ...state,
      email: action.value,
    };
  default:
    return state;
  }
};
export default reducer;
