import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { categoryFilter } from "./filter.js";


const catalog = () => {

  const catalogBtn = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItems = document.querySelectorAll('.catalog li');

  let isOpen = false;

  catalogBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if(isOpen === true){
      catalogModal.style.display = 'flex';
    } else {
      catalogModal.style.display = '';
    }

    
  });

  catalogModalItems.forEach(element => {

    element.addEventListener('click', () => {
      const text = element.textContent;

      getData().then((data) => {
      renderGoods(categoryFilter(data, text));
    });
    });

  });

};

export default catalog;