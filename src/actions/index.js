// Coloque aqui suas actions
const GET_EMAIL = 'GET_EMAIL';
const GET_WALLET = 'GET_WALLET';

export const userAction = (value) => ({ type: GET_EMAIL, value });
export const walletAction = (value) => ({ type: GET_WALLET, value });
