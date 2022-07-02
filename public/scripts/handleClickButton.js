import { elements } from './elements.js';

const { message } = elements;

export const handleClickButton = (element, index) => {
  element.addEventListener('click', () => {
    if(message[index].classList.contains('hide')) {
      message[index].classList.remove('hide');
    } else {
      message[index].classList.add('hide');
    }
  })
}