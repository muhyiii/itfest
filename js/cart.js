let cart = document.getElementById("icon")
let shop = document.getElementById("shop")

cart.addEventListener("click",()=>{
    shop.classList.toggle("cart-page-dis")
    shop.classList.toggle("cart-page")
})