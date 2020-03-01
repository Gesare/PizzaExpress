// Business logic
function Order(size, crust, topping, number) {
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = topping;
    this.pizzaNumber = number;
}
Order.prototype.aboutOrder = function () {
    return this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzaToppings + "," + this.pizzaNumber;
}

// UI Logic
$(document).ready(function () {
    $('form#orders').submit(function (event) {
        event.preventDefault();

        var choosenSize = $("input[name='size']:checked").val();
        var priceSize;
        if (choosenSize === "Small") {
            priceSize = 600;
        }
        else if (choosenSize === "Medium") {
            priceSize = 800;
        }
        else {
            priceSize = 1200;
        }
        var choosenCrust = $("input[name='crust']:checked").val();
        var priceCrust;
        if ((choosenCrust === "thin") || (choosenCrust === "gluten")) {
            priceCrust = 300;
        }
        else {
            priceCrust = 500;
        }
        var choosenToppings = [];
        $("#toppings option:selected").each(function () {
            choosenToppings.push($(this).val());
        });
        var addToppings = 0;
        for (var top = 0; top < choosenToppings.length; top++) {
            if (choosenToppings[top] === "Sausage and caramelized onion") {
                addToppings += 50;
            }
            else if ((choosenToppings[top] === "Pepperoni and tomatoes") || (choosenToppings[top] === "Green peppers")) {
                addToppings += 100;
            }
            else if (choosenToppings[top] === "Pepperoni and tomatoes") {
                addToppings += 150;
            }
            else if (choosenToppings === "Pepperoni and sausage") {
                addToppings += 170;
            }
            else if ((choosenToppings === "Barbecue sauce and chicken") || (choosenToppings === "BBQ sauce and grilled chicken")) {
                addToppings += 200;
            }
            else {
                addToppings += 70;
            }
        }
        var choosenNumber = parseInt($("#number").val());
        var newOrder = new Order(choosenSize, choosenCrust, addToppings, choosenNumber)

    });

    $("#pick").click(function () {
        $("#price").show();
        $("#order").show();
        $("#details").text()=choosenSize+", "+choosenCrust+", ";
        $("#pizza-amount").text() = priceSize + priceCrust + specialTopping + " Rwf";
        $("#check").show();
        $("#check").click(function () {
            $("#price").show();
            $("#order").show();
            $("#add").show();
        });
    });
    $("#deliver").click(function () {
        alert("Please, mention your location!");
        var location = prompt("Enter your location address!");
        alert("Thanks, you will be delivered at " + location);
        $("#check").show();
        $("#check").click(function () {
            $("#price").show();
            $("#order").show();
            $("#delivery").show();
            $("#charges").show();
            $("#add").show();
        });
    });
  $(".A").hover(function(){
  $(".large").slideToggle()
});
$(".B").hover(function(){
  $(".medium").slideToggle()
});
$(".C").hover(function(){
  $(".small").slideToggle()
});
});
