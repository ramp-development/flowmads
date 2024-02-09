import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const updateRects = () => {
  console.log('updateRects');

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
};
