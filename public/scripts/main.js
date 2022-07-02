import { elements } from './elements.js';
import { handleClickButton } from './handleClickButton.js';

const { btnPlus, inHouseBtn, message, overlayContainer, perVideoBtn } = elements;

perVideoBtn.classList.add('hide');
inHouseBtn.classList.add('hide');
message.forEach(item => item.classList.add('hide'));

btnPlus.addEventListener('click', () => {
  if(overlayContainer.classList.contains('overlay')) {
    overlayContainer.classList.remove('overlay');
    perVideoBtn.classList.add('hide');
    inHouseBtn.classList.add('hide');
    message.forEach(item => item.classList.add('hide'));
  } else {
    overlayContainer.classList.add('overlay');
    perVideoBtn.classList.remove('hide');
    inHouseBtn.classList.remove('hide');
  }
})

handleClickButton(perVideoBtn, 0);
handleClickButton(inHouseBtn, 1);