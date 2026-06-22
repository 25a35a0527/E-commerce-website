function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price
});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart successfully!");
}
function clearCart(){
localStorage.removeItem("cart");
alert("Cart Cleared!");
location.reload();
}