// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_FORM':
    console.log(action.value);
    return {
      email: action.value,
    };

  default:
    return state;
  }
};

export default reducer;
