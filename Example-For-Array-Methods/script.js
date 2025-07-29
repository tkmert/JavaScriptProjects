// This array will store the products added to the card
let card = [];

// Select DOM elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const cardList = document.getElementById("cardList");

// Function to add a product to the card
function addTocard() {
    const product = productInput.value.trim(); // Get the input value and remove whitespace

    if (product !== "") {
        card.push(product); // Add the product to the array
        productInput.value = ""; // Clear the input field
        displaycard(); // Update the product list on the page
    } else {
        alert("Please enter a product name."); // Alert if input is empty
    }
}

// Function to display the card items in the HTML list
function displaycard() {
    cardList.innerHTML = ""; // Clear the current list

    card.forEach(function (item, index) {
        const li = document.createElement("li"); // Create a list item
        li.textContent = `${index + 1}. ${item}`; // Show item number and name
        cardList.appendChild(li); // Add the list item to the card list
    });
}

//When the button is clicked, call addTocard()
addBtn.addEventListener("click", addTocard);

//When Enter key is pressed in the input, also call addTocard()
productInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTocard();
    }
});
