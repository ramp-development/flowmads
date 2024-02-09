import { formSubmit } from '$utils/formSubmit';
import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const home = () => {
  console.log('home');

  updateRects();
  window.onresize = updateRects;

  function updateRects() {
    const wrapper = queryElement<HTMLDivElement>('.hero-graphic_svgs');
    if (!wrapper) return;

    const rects = queryElements('rect', wrapper);
    rects.forEach((rect) => {
      rect.setAttribute('height', `${wrapper.offsetHeight}px`);
    });
  }

  // listen for a form successfully being submitted
  const form = queryElement<HTMLFormElement>('form');
  if (form) formSubmit(form);
};
