const card = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = document.querySelector('.cart-close');


  const openCart = () => {
    cartModal.style.display = 'flex';
  }

  const closeCart = () => {
    cartModal.style.display = '';
  }

  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
}

export default card;