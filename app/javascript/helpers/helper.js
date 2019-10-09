import { error } from './notifications';

export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateEquation = (equation) => {
  const errors = {};

  if (equation.senior_cofficient === '') {
    errors.senior_cofficient = 'You must enter a senior_cofficient';
  }

  if (equation.avarage_cofficent === '') {
    errors.avarage_cofficent = 'You must enter an avarage_cofficent';
  }

  if (equation.free_cofficient === '') {
    errors.free_cofficient = 'You must enter a free_cofficient';
  }

  return errors;
}

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.warn(err);
};
