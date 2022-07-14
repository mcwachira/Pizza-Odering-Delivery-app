if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}{
    ready()
}


function ready(){

    const removeItemBtn = document.querySelectorAll('.cart__items-delete')
    //function to remove item from cart
    removeItemBtn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log('clicekd')
            const itemContainer = button.parentElement.parentElement.remove();


            UpdateCart()
        })
    })


}




const inputQuantityContainer = document.querySelectorAll('.cart__items--quantity__input')
const addToCartBtn = document.querySelectorAll('.orderButton')

const checkoutBtn = document.getElementsByClassName('cart__checkout')[0];


//update price based on item quantity 

inputQuantityContainer.forEach((input) => (input.addEventListener('change', (e) => {
    if (isNaN(e.target.value) || e.target.value <= 0) {
        e.target.value = 1
    }
    UpdateCart();
})
))







//add To cart event Listener
addToCartBtn.forEach((button) => (button.addEventListener('click', () => {
    const itemToAdd = button.parentElement.parentElement;
    
    const itemPrice = itemToAdd.getElementsByClassName('pizza__details--header__price')[0].innerText;
    const itemName = itemToAdd.getElementsByClassName('pizza__details--name')[0].innerText;
    const itemImageContainer = button.parentElement.parentElement.parentElement;
    const itemImage = itemImageContainer.getElementsByClassName('pizza__img')[0].src;
    console.log(itemImage)

        addToCart(itemPrice, itemImage, itemName)    
 
})))

const addToCart = (itemPrice, itemImage, itemName) => {
    const itemCartContainer = document.getElementsByClassName('cart__items')[0];
    const cartItem = document.createElement('div');
    const itemContents = `
       <div class="cart__items-body">
                        <div class="cart__items--img">
                            <img src=${itemImage} class="cart__img" alt="">
                        </div>
                          <div class="cart__items--name">
                           ${itemName}
                        </div>
                
                        <div class="cart__items--price">
                            ${itemPrice}
                        </div>
                        <div class="cart__items--quantity">
                
                        <input type="number" class="cart__items--quantity__input"  value="1">
                        <button class="cart__items-delete">
                            Remove
                        </button>
                        </div>
                    </div>
    
    `
    cartItem.innerHTML = itemContents;
    itemCartContainer.append(cartItem);
    
    UpdateCart()

}


//checkout function 

checkoutBtn.addEventListener('click', () => {
    const checkOutItemsContainer= document.getElementsByClassName('cart__items')[0].innerHTML = "";
    const checkoutTotal = document.getElementsByClassName('cart__total')[0].innerHTML = "";
    console.log(checkOutItemsContainer)
    alert('orderer completed ')
    UpdateCart()

    
})


const UpdateCart = () => {
    const CartContainer =  document.getElementsByClassName('cart__items')[0]

    const cartItemBody = CartContainer.getElementsByClassName('cart__items-body')

    let total = 0
    for( let i = 0 ; i< cartItemBody.length; i ++){
        const cartItem = cartItemBody[i]

        const itemPriceContainer = cartItem.getElementsByClassName('cart__items--price')[0]

        const itemQuantityContainer = cartItem.getElementsByClassName('cart__items--quantity__input')[0]

        const price = parseFloat(itemPriceContainer.innerText.replace("$", ""))
  
        const quantity = itemQuantityContainer.value;
 

        total = total +  (price * quantity)
        console.log(total)
    }
    total = Math.round(total * 100) /100

    //update the total
    document.getElementsByClassName('cart__total')[0].innerText = "$" + total
}