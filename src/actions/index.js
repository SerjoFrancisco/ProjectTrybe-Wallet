// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const userAction = (value) => ({ type: GET_EMAIL, value });

export const currenciesAction = (value) => ({ type: GET_CURRENCIES, value });

export const expenseAction = (value) => ({ type: GET_EXPENSES, value });

export const deleteAction = (value) => ({ type: DELETE_EXPENSES, value });
