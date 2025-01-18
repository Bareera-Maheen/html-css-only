// const sidebar =document.getElementById('sidebar')
// function togglesidebar(){
//     sidebar.classList.toggle('show')
// }

function openNav(){
    document.getElementById('sidenav').style.width='250px'
}
function closeNav(){
    document.getElementById('sidenav').style.width='0'
    sidenav.classList.toggle('hidden')
}


document.addEventListener("DOMContentLoaded", function () {
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    var cartItemsContainer = document.getElementById("cart-items");
    var cartTotal = document.getElementById("cart-total");
    var cart = [];
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            var _a, _b;
            var productName = event.currentTarget.dataset.name;
            var productPrice = parseFloat(((_b = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector("p:nth-of-type(2)")) === null || _b === void 0 ? void 0 : _b.textContent.replace('Price: $', '')) || '0');
            cart.push({ name: productName, price: productPrice });
            alert("".concat(productName, " has been added to your cart!"));
            updateCart();
        });
    });
    function updateCart() {
        cartItemsContainer.innerHTML = ""; // Clear current cart items
        var total = 0;
        cart.forEach(function (item) {
            var div = document.createElement("div");
            div.textContent = "".concat(item.name, " - $").concat(item.price.toFixed(2));
            cartItemsContainer.appendChild(div);
            total += item.price;
        });
        cartTotal.textContent = "Total: $".concat(total.toFixed(2));
    }
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for your reviews!");
            contactForm.reset();
        });
    }
});
