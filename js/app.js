const removeItemBtn = document.querySelectorAll('.cart__items-delete')
const inputQuantityContainer = document.getElementsByClassName('cart__items--quantity__input')[0]






//function to remove item from cart
removeItemBtn.forEach((button) => (button.addEventListener('click', () => {
    const itemContainer = button.parentElement.parentElement.remove();


    UpdateCart()
})))

//update price based on item quantity 
inputQuantityContainer.addEventListener('change', (e) => {
    if(isNaN(e.target.value) || e.target.value <=0){
        return 1;
    }
    UpdateCart()
})

const UpdateCart = () => {
    const CartContainer =  document.getElementsByClassName('cart__items')[0]

    const cartItemBody = CartContainer.getElementsByClassName('cart__items-body')

    let total = 0
    for( let i = 0 ; i< cartItemBody.length; i ++){
        const cartItem = cartItemBody[i]

        const itemPriceContainer = cartItem.getElementsByClassName('cart__items--price')[0]
        console.log(cartItemBody)
        const itemQuantityContainer = cartItem.getElementsByClassName('cart__items--quantity__input')[0]

        const price = parseFloat(itemPriceContainer.innerText.replace("$", ""))
        console.log(price)
        const quantity = itemQuantityContainer.value;
        console.log(quantity)

        total = total +  (price * quantity)
        console.log(total)
    }
    total = Math.round(total * 100) /100

    //update the total
    document.getElementsByClassName('cart__total')[0].innerText =total
}