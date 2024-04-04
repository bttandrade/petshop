//const btns = document.getElementsByClassName('btn-buy');

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => {
//         location.href = '../pages/shopping-cart.html';
//     });   
// }

function addToCart(event) {
  const product = event.target.parentNode;
  const productName = product.querySelector('h4').innerText;
  const productImage = product.querySelector('img').src;
  const productPrice = product.querySelector('h5').innerHTML;
  const productQuant = 1;

  // Cria um objeto para representar o produto
  const productData = {
      name: productName,
      image: productImage,
      price: productPrice,
      quant: productQuant,
  };

  // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Verifica se o produto já está no carrinho
  const existingProductIndex = cart.findIndex(item => item.name === productData.name);

  if (existingProductIndex !== -1) {
      // Se o produto já estiver no carrinho, aumenta sua quantidade em 1
      cart[existingProductIndex].quant++;
  } else {
      // Se o produto não estiver no carrinho, adiciona-o ao carrinho
      cart.push(productData);
  }

  // Salva o carrinho atualizado de volta no armazenamento local
  localStorage.setItem('cart', JSON.stringify(cart));

  window.location.href = './shopping-cart.html';
}

const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
