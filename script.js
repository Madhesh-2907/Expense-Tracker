let total = 0;

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if (name === "" || amount === "" || category === "") {
        alert("Please fill all fields");
        return;
    }

    amount = Number(amount);

    let li = document.createElement("li");
    li.innerHTML = `
        ${name} (${category}) - ₹${amount}
        <button onclick="removeExpense(this, ${amount})">X</button>
    `;

    
    document.getElementById("expenseList").appendChild(li);

    total += amount;
    document.getElementById("total").innerText = total;

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
}

function removeExpense(button, amount) {
    button.parentElement.remove();
    total -= amount;
    document.getElementById("total").innerText = total;
}
