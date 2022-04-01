// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_EMAIL':
    console.log(action.value);
    return {
      ...state,
      email: action.value,
    };
  default:
    return { ...state };
  }
};
export default user;
