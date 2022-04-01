// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const userAction = (value) => ({ type: GET_EMAIL, value });

export const walletAction = (value) => ({ type: GET_CURRENCIES, value });
