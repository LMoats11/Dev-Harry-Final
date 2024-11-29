$(document).ready(function() {
    $('#loadOrder').click(function() {
        const favoriteOrder = {
            name: "Joe",
            bread: "Whole Wheat",
            meat: ["Chicken", "Turkey"],
            toppings: ["Lettuce", "Tomato"],
            condiments: ["Mayonnaise", "Mustard"],
            size: "Medium",
            phone: "555-1234"
        };
        $('#customerName').val(favoriteOrder.name);
        $('#breadType').val(favoriteOrder.bread);
        favoriteOrder.meat.forEach(meat => {
            $(`#${meat.toLowerCase()}`).prop('checked', true);
        });
        favoriteOrder.toppings.forEach(topping => {
            $(`#${topping.toLowerCase()}`).prop('checked', true);
        });
        favoriteOrder.condiments.forEach(condiment => {
            $(`#${condiment.toLowerCase()}`).prop('checked', true);
        });
        $('#size').val(favoriteOrder.size);
        $('#phoneNumber').val(favoriteOrder.phone);
    });

    $('#makeFavorite').click(function() {
        const favoriteOrder = {
            name: $('#customerName').val(),
            bread: $('#breadType').val(),
            meat: [],
            toppings: [],
            condiments: [],
            size: $('#size').val(),
            phone: $('#phoneNumber').val()
        };
        $('input[type="checkbox"]:checked').each(function() {
            if ($(this).val() === "Chicken" || $(this).val() === "Turkey" || $(this).val() === "Ham" || $(this).val() === "Roast Beef" || $(this).val() === "Tuna" || $(this).val() === "Vegetarian") {
                favoriteOrder.meat.push($(this).val());
            } else if ($(this).val() === "Lettuce" || $(this).val() === "Tomato" || $(this).val() === "Onions" || $(this).val() === "Pickles" || $(this).val() === "Cheese") {
                favoriteOrder.toppings.push($(this).val());
            } else if ($(this).val() === "Mayonnaise" || $(this).val() === "Mustard" || $(this).val() === "Ketchup" || $(this).val() === "BBQ Sauce") {
                favoriteOrder.condiments.push($(this).val());
            }
        });
        alert("Your favorite order has been saved!");
        console.log(favoriteOrder);
    });

    $('#orderForm').on("submit", function(e) {
        e.preventDefault();
        const orderDetails = {
            name: $('#customerName').val(),
            bread: $('#breadType').val(),
            meat: [],
            toppings: [],
            condiments: [],
            size: $('#size').val(),
            phone: $('#phoneNumber').val()
        };
        $('input[type="checkbox"]:checked').each(function() {
            if ($(this).val() === "Chicken" || $(this).val() === "Turkey" || $(this).val() === "Ham" || $(this).val() === "Roast Beef" || $(this).val() === "Tuna" || $(this).val() === "Vegetarian") {
                orderDetails.meat.push($(this).val());
            } else if ($(this).val() === "Lettuce" || $(this).val() === "Tomato" || $(this).val() === "Onions" || $(this).val() === "Pickles" || $(this).val() === "Cheese") {
                orderDetails.toppings.push($(this).val());
            } else if ($(this).val() === "Mayonnaise" || $(this).val() === "Mustard" || $(this).val() === "Ketchup" || $(this).val() === "BBQ Sauce") {
                orderDetails.condiments.push($(this).val());
            }
        });
        let output = `<h5>Order Summary:</h5>
                      <p><strong>Name:</strong> ${orderDetails.name}</p>
                      <p><strong>Bread:</strong> ${orderDetails.bread}</p>
                      <p><strong>Meat:</strong> ${orderDetails.meat.join(', ')}</p>
                      <p><strong>Toppings:</strong> ${orderDetails.toppings.join(', ')}</p>
                      <p><strong>Condiments:</strong> ${orderDetails.condiments.join(', ')}</p>
                      <p><strong>Size:</strong> ${orderDetails.size}</p>
                      <p><strong>Phone Number:</strong> ${orderDetails.phone}</p>`;
        $('#orderOutput').html(output);
    });
});
