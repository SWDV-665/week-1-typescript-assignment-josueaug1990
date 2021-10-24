var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.subtotal = quantity * price;
    }
    return Grocery;
}());
var milk = new Grocery("Milk", 5, 4.30);
var eggs = new Grocery("Eggs", 12, 3.25);
var bread = new Grocery("Bread", 6, 0.50);
var meat = new Grocery("Meat", 4, 7.50);
var grocery_Items = [];
grocery_Items.push(milk);
grocery_Items.push(eggs);
grocery_Items.push(bread);
grocery_Items.push(meat);
var table = document.getElementById('items');
grocery_Items.map(function (grocery) {
    var name = grocery.name, quantity = grocery.quantity, price = grocery.price, subtotal = grocery.subtotal;
    var table_row = table.insertRow();
    table_row.innerHTML = "\n            <td id=\"name\">" + name + "</td>\n            <td id=\"qty\">" + quantity + "</td>\n            <td id=\"price\">" + price + "</td>\n            <td id=\"subtotal\">" + subtotal + "</td>";
});
