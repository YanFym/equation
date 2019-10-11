import { error } from './notifications';

export const isEmptyObject = obj => Object.keys(obj).length === 0;

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

export const validateEquation = (equation) => {
  const errors = {};

  if (equation.senior_cofficient === '' || isNumber(equation.senior_cofficient) == false) {
    errors.senior_cofficient = 'You must enter a senior_cofficient correctly';
  }

  if (equation.avarage_cofficent === '' || isNumber(equation.avarage_cofficent) == false) {
    errors.avarage_cofficent = 'You must enter an avarage_cofficent correctly';
  }

  if (equation.free_cofficient === '' || isNumber(equation.free_cofficient) == false) {
    errors.free_cofficient = 'You must enter a free_cofficient correctly';
  }

  return errors;
}

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.warn(err);
};
