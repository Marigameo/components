//create cart items array
let cartItems = [];
let disabledItems = [];
//add cart item
function addToCart(id,itemName,price,category){
    console.log(event);
    event.target.disabled = true;
    //create obj
    let item = {
        "id":id,
        "itemName":itemName,
        "price":price,
        "category":category
    }
    //add to cartItems array
    cartItems.unshift(item);
    disabledItems.unshift(id);
    //add to localStorage
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    sessionStorage.setItem('disabledItems',JSON.stringify(disabledItems));
}

