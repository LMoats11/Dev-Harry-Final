$(document).ready(() => {
    const favoriteOrder = {
        customerName: '',
        breadType: null,
        toppings: [],
        size: null,
        phoneNumber: ''
    };

    $('#orderForm').on("submit", (e) => {
        e.preventDefault();
        const order = {
            customerName: $('#customerName').val(),
            breadType: $('#breadType').val(),
            toppings: [],
            size: $('#size').val(),
            phoneNumber: $('#phoneNumber').val()
        };
        $('input[type="checkbox"]:checked').each(function () {
            order.toppings.push($(this).val());
        });
        $('#orderOutput').html(`<strong>Order Submitted!</strong><br>Name: ${order.customerName}<br>Phone: ${order.phoneNumber}`);
        console.log('Order:', JSON.stringify(order, null, 2));
    });

    $('#makeFavorite').on("click", () => {
        favoriteOrder.customerName = $('#customerName').val();
        favoriteOrder.breadType = $('#breadType').val();
        favoriteOrder.size = $('#size').val();
        favoriteOrder.phoneNumber = $('#phoneNumber').val();
        favoriteOrder.toppings = [];
        $('input[type="checkbox"]:checked').each(function () {
            favoriteOrder.toppings.push($(this).val());
        });
        $('#orderOutput').html('<strong>Favorite Order Saved!</strong>');
    });

    $('#loadOrder').on("click", () => {
        if (!favoriteOrder.customerName) {
            $('#orderOutput').html('<strong>No Favorite Order Saved!</strong>');
            return;
        }
        $('#customerName').val(favoriteOrder.customerName);
        $('#breadType').val(favoriteOrder.breadType);
        $('#size').val(favoriteOrder.size);
        $('#phoneNumber').val(favoriteOrder.phoneNumber);
        $('input[type="checkbox"]').each(function () {
            const topping = $(this).val();
            $(this).prop('checked', favoriteOrder.toppings.includes(topping));
        });
        $('#orderOutput').html('<strong>Favorite Order Loaded!</strong>');
    });
});

