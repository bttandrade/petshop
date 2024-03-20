const btns = document.getElementsByClassName('btn-buy');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        location.href = '../pages/shopping-cart.html';
    });   
}