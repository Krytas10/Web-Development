
const costPerLiter = document.getElementById('costPerLiter');
const liters = document.getElementById('liters');
const calculateBtn = document.getElementById('calculateBtn');
const totalCost = document.getElementById('totalCost');


calculateBtn.addEventListener('click', () => {
    const cost = parseFloat(costPerLiter.value);
    const amount = parseFloat(liters.value);

    if (!isNaN(cost) && !isNaN(amount) && cost >= 0 && amount >= 0) {
        const total = cost * amount;
        totalCost.textContent = `Total $${total.toFixed(2)}`;
    } else {
        totalCost.textContent = "Please enter valid positive numbers!";
    }
});