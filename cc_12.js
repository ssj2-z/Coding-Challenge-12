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
