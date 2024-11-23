document.getElementById("loadOrder").addEventListener("click", () => {
    const savedOrder = JSON.parse(localStorage.getItem("favoriteOrder"));
    
    if (savedOrder) {
        document.getElementById("customerName").value = savedOrder.name;
        const breadRadioButton = document.querySelector(`input[name="breadType"][value="${savedOrder.breadType}"]`);
        if (breadRadioButton) {
            breadRadioButton.checked = true;
        } else {
            console.log("Bread type not found, defaulting to white bread.");
            document.querySelector('input[name="breadType"][value="White"]').checked = true;
        }
        
        savedOrder.toppings.forEach(topping => {
            const toppingCheckbox = document.getElementById(topping);
            if (toppingCheckbox) {
                toppingCheckbox.checked = true;
            }
        });
        
        document.getElementById("size").value = savedOrder.size;
        document.getElementById("phoneNumber").value = savedOrder.phoneNumber;
    } else {
        alert("No favorite order found!");
    }
});

document.getElementById("makeFavorite").addEventListener("click", () => {
    const orderData = {
        name: document.getElementById("customerName").value,
        breadType: document.querySelector('[name="breadType"]:checked')?.value,
        toppings: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.id),
        size: document.getElementById("size").value,
        phoneNumber: document.getElementById("phoneNumber").value
    };
    localStorage.setItem("favoriteOrder", JSON.stringify(orderData));
    alert("Order saved as favorite!");
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const orderData = {
        name: document.getElementById("customerName").value,
        breadType: document.querySelector('[name="breadType"]:checked').value,
        toppings: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value),
        size: document.getElementById("size").value,
        phoneNumber: document.getElementById("phoneNumber").value
    };

    const outputHTML = `
        <p><strong>Name:</strong> ${orderData.name}</p>
        <p><strong>Bread Type:</strong> ${orderData.breadType}</p>
        <p><strong>Toppings:</strong> ${orderData.toppings.length > 0 ? orderData.toppings.join(", ") : "None"}</p>
        <p><strong>Size:</strong> ${orderData.size}</p>
        <p><strong>Phone Number:</strong> ${orderData.phoneNumber}</p>
    `;

    document.getElementById("orderOutput").innerHTML = outputHTML;

    console.log(JSON.stringify(orderData, null, 2));
});
