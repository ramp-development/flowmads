import { updateRects } from './updateRects';

export const home = () => {
  console.log('home');

  updateRects();

  // listen for a form successfully being submitted
  const form = document.querySelector('form');
  if (form) formSubmit(form);
};
