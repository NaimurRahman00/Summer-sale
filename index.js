const cards = document.querySelectorAll('.card');
let totalProductPrice = 0;

for (const card of cards) {
    card.addEventListener('click', function () {
        // Product name added on cart list
        const selectedItemsContainer = document.getElementById('title-container');
        const li = document.createElement('li');
        const productName = card.children[1].children[1].innerText;
        li.innerText = productName;
        selectedItemsContainer.appendChild(li);

        // product cost added
        const costElement = card.querySelector('span').innerText.split(" ")[1];
        const productCost = parseInt(costElement);

        totalProductPrice += productCost;
        const totalPrice = document.getElementById('totalPrice');
        totalPrice.innerText = ' ' + totalProductPrice.toFixed(2);

    })
}

// Discount
const inputFieldElement = document.getElementById('apply-btn');

inputFieldElement.addEventListener('click', function(){
    const couponInputField = document.getElementById('input-field')
    const couponInput = couponInputField.value.toUpperCase();

    if (totalProductPrice > 199 && couponInput === 'SELL200') {
        // discount
        const discount = totalProductPrice * 0.2;
        const discountElement = document.getElementById('discountPrice');
        discountElement.innerText = ' ' + discount.toFixed(2);

        // rest total
        const finalCost = totalProductPrice.toFixed(2) - discount.toFixed(2);
        const finalCostElement = document.getElementById('total');
        finalCostElement.innerText = ' ' + finalCost.toFixed(2);

        // refresh coupon input
        couponInputField.value = '';

    }
})
