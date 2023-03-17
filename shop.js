let cartIcon = document.querySelector('.cart-icon')
let cart = document.querySelector('.cart-container')
let cartRemove = document.querySelector('.close-cart')
let cartQuantity = 0;

cartIcon.onclick = () => {
    cart.classList.add("active")
}

cartRemove.onclick = () => {
    cart.classList.remove("active")
}

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

function ready(){
    var addBtns = document.getElementById('cart');
    for(var i = 0; i < addBtns.length; i++){
        var btnAdd = addBtns[i];
        btnAdd.addEventListener('click', addItem)
    }
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i = 0; i<removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i = 0; i<quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addCart = document.getElementsByClassName('cart')
    for(var i = 0; i<addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked)
    }

    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
}

function buyButtonClicked(){
    if(cartQuantity == 0){
        alert('Please add items to your cart')
    }else{
        location.href = "payment.html"
    }
}


function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    cartQuantity--;
    updateTotal()
}

function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("p-title")[0].innerText
    var price = shopProducts.getElementsByClassName("p-price")[0].innerText
    var productImg = shopProducts.getElementsByClassName("p-img")[0].src

    addProductToCart(title, price, productImg)
    updateTotal();
}

function addProductToCart(title, price, productImg){
    cartQuantity++;
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for(var i = 0; i<cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert('You have already added this item to the cart')
            return;
        }
    }

    var cartBoxContent = `
                    <img src="${productImg}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                    <img src="Assets/trash.png" alt="" class="cart-remove">`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}


function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0
    for(var i = 0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
        total = Math.round(total * 100) / 100

        document.getElementsByClassName('total-price')[0].innerText = "$" + total
    
}