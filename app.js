// buyer details event
document
  .getElementById("detail-submit-btn")
  .addEventListener("click", function () {
    const buyerDetailBtn = document.getElementById("buyer-details-input");
    document.getElementById("buyer-info").innerText = buyerDetailBtn.value;
    buyerDetailBtn.value = "";
  });

//   addig product
document
  .getElementById("add-details-btn")
  .addEventListener("click", function () {
    const itemName = document.getElementById("item-name-input");
    const itemPrice = document.getElementById("item-price-input");
    const itemQuantity = document.getElementById("item-quantity-input");
    if (
      itemName.value == "" ||
      itemPrice.value < 0 ||
      itemQuantity.value < 0 ||
      itemPrice.value == "" ||
      itemQuantity.value == ""
    ) {
      alert("Invalid  Input");
      return;
    }

    const infoTable = document.getElementById("info-table");

    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

    const tr = document.createElement("tr");
    const th = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td3.classList.add("item-total");

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
    totalCalculation();
  });
function totalCalculation() {
  const subTotal = calculateSubTotal();
  const subTotalDisplay = document.getElementById("sub-total");
  subTotalDisplay.innerText = subTotal;
  const tax = subTotal * 0.2;
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("grand-total").innerText = subTotal + tax;
  document.getElementById("grand-total-2").innerText = subTotal + tax;
}

function calculateSubTotal() {
  const costs = document.getElementsByClassName("item-total");
  let subTotal = 0;
  for (const cost of costs) {
    const price = parseInt(cost.innerText);
    subTotal += price;
  }
  return subTotal;
}
