$(document).ready(() => {
    const favoriteOrder = {
        customerName: '',
        breadType: null,
        meatType: [],
        toppings: [],
        condiments: [],
        size: null,
        phoneNumber: ''
    };

    $('#orderForm').on("submit", (e) => {
        e.preventDefault();
        const order = {
            customerName: $('#customerName').val(),
            breadType: $('#breadType').val(),
            meatType: [],
            toppings: [],
            condiments: [],
            size: $('#size').val(),
            phoneNumber: $('#phoneNumber').val()
        };

        // Collect meat choices
        $('input[type="checkbox"]:checked').each(function () {
            const value = $(this).val();
            if ($(this).attr('id') === 'lettuce' || $(this).attr('id') === 'tomato' || $(this).attr('id') === 'onions' || $(this).attr('id') === 'pickles' || $(this).attr('id') === 'cheese') {
                order.toppings.push(value);
            } else if ($(this).attr('id') === 'mayonnaise' || $(this).attr('id') === 'mustard' || $(this).attr('id') === 'ketchup' || $(this).attr('id') === 'bbqSauce') {
                order.condiments.push(value);
            } else {
                order.meatType.push(value);
            }
        });

        $('#orderOutput').html(`<strong>Order Submitted!</strong><br>Name: ${order.customerName}<br>Phone: ${order.phoneNumber}`);
        console.log('Order:', JSON.stringify(order, null, 2));
    });

    $('#makeFavorite').on("click", () => {
        favoriteOrder.customerName = $('#customerName').val();
        favoriteOrder.breadType = $('#breadType').val();
        favoriteOrder.size = $('#size').val();
        favoriteOrder.phoneNumber = $('#phoneNumber').val();
        favoriteOrder.meatType = [];
        favoriteOrder.toppings = [];
        favoriteOrder.condiments = [];
        $('input[type="checkbox"]:checked').each(function () {
            const value = $(this).val();
            if ($(this).attr('id') === 'lettuce' || $(
