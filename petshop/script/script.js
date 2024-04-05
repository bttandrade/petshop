const continueBuy = document.getElementById('continue-buy');
const finish = document.getElementById('finish');

continueBuy.addEventListener('click', () => {
  location.href='products.html';
});

finish.addEventListener('click', () => {
  alert('função ainda não adicionada');
});

function addToCart(event) {
  const product = event.target.parentNode;
  const productName = product.querySelector('h4').innerText;
  const productImage = product.querySelector('img').src;
  const productPrice = product.querySelector('h5').innerHTML;
  const productQuant = 1;

  const productData = {
    name: productName,
    image: productImage,
    price: productPrice,
    quant: productQuant,
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProductIndex = cart.findIndex(item => item.name === productData.name);

  if (existingProductIndex !== -1) {
      cart[existingProductIndex].quant++;
  } else {
      cart.push(productData);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  window.location.href = './shopping-cart.html';
}

const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
