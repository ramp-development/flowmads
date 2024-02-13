import gsap from 'gsap';

import { queryElement } from './queryElement';
import { queryElements } from './queryElements';

export const formSubmit = (form: HTMLFormElement) => {
  console.log('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submitted');

    const icons = queryElements<HTMLElement>('.btn-icon', form);
    gsap.to(icons, { xPercent: 100, duration: 1, ease: 'power2.out' });

    const text = queryElement('.btn-text', form);
    if (!text) return;

    text.textContent = 'Sending...';
    setTimeout(() => {
      text.textContent = "You're in!";
      form.classList.add('cc-success');
    }, 500);
  });
};
