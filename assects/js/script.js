let cart = 0;

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        cart++;

        document.getElementById("cart-count").innerText = cart;

        this.innerHTML = "Added ✔";

        this.classList.remove("btn-primary");
        this.classList.add("btn-success");

    });

});