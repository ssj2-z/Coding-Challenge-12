// Task 1 Element Selection and Creation
var dashboard = document.getElementById(`dashboard`);
var dashboardQuery = document.querySelector(`#dashboard`);

var revenueCard = document.createElement(`div`);

revenueCard.setAttribute(`class`, `metric-card`);
revenueCard.setAttribute(`id`, `revenueCard`);

revenueCard.innerHTML = 
<h3>revenue</h3>;
<p>$0</p>;

dashboard.appendChild(revenueCard);

// Task 2 Working with NodeLists and Arrays
var metricCards = document.querySelectorAll(`.metriccard`);
var metricCardsArray = Array.from(metricCards);

metricCardsArray.forEach(function(card) {
    card.innerHTML += ` - Updated`;
    card.computedStyleMap.backgroundColor = `#f0f0f0`;
});

// Task 3 Adding and Removing Items
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,
initial-scale=1.0">
    <title>Inventory Management</title</title>
</head>
<body>
    <ul id="inventoryList"></ul>
    <button onclick="addProduct()">Add Product</button>

    <script>
        function addProduct() {
            var newProduct = document.createElement(`li`);

            newProduct.setAttribute(`class`, `product-item`);
            newProduct.setAttribute(`data-product-id`,
`product-` + Date.now());

            newProduct.innerText = `New Product`;
            var inventoryList =
document.getElementById(`inventoryList`);
            inventoryList.appendChild(newProduct);

            newProduct.addEventListener(`click`, function() {
                removeProduct(newProduct);
            });
            }
            
            function removeProduct(productItem) {
                var inventoryList = 
document.getElementById(`inventoryList`);
                inventoryList.removeChild(productItem);
            });

    </script>
</body>
</html>