//getting system date and displaying in written format
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let today = new Date();
let dayToday = document.getElementById("day-today");
dayToday.innerHTML = today.toLocaleDateString("en-US", options);
//welcome message and intsructions
alert("Welcome to your weekly grocery shopping list!");
alert(
  "Type the products in relevant lists given below and manage your shopping list at one place"
);
//creating variables to access html elements
let enoughList = document.getElementById("enough-list");
let almostFinishList = document.getElementById("almost-finish-list");
let needTOBuyList = document.getElementById("need-to-buy-list");
let totalPrice = document.getElementById("total-price");
let total = 0;
let lists = {
  enoughListArray: [],
  almostFinishListArray: [],

  needTOBuyListArray: [],
};
//function to add items into first list
function addToEnoughList() {
  let enoughListInput = document.getElementById("products-enough").value;
  if (enoughListInput == "") {
    alert("Type in product name");
  } else {
    lists.enoughListArray.push(enoughListInput);
  }
  showEnoughList();
  document.getElementById("products-enough").value = "";
}
//function to show first list items
function showEnoughList() {
  enoughList.innerHTML = "";
  for (let i = 0; i < lists.enoughListArray.length; i++) {
    enoughList.innerHTML += `<div class="item">${[i + 1]} .<p> ${
      lists.enoughListArray[i]
    } </p>
    <button id="delete-btn" onclick="deleteProduct(${i})"><i class="fa fa-trash"></i></button></div>`;
  }
}
//function to delete item from first list
function deleteProduct(i) {
  let confirmUser = prompt("Do you want to delete this from your list? Yes/No");
  if (confirmUser == "yes") {
    lists.enoughListArray.splice(i, 1);
  } else {
    alert("nothing deleted from this list");
  }
  showEnoughList();
  console.log(lists.enoughListArray);
}
// function to add items to second list
function addToAlmostFinishList() {
  let almostFinishInput = document.getElementById("almost-finish").value;
  if (almostFinishInput == "") {
    alert("Type in product name");
  } else {
    lists.almostFinishListArray.push(almostFinishInput);
  }
  showalmostFinishList();
  document.getElementById("almost-finish").value = "";
}
// function to show second lists' items
function showalmostFinishList() {
  almostFinishList.innerHTML = "";
  for (let i = 0; i < lists.almostFinishListArray.length; i++) {
    almostFinishList.innerHTML += `<div class="item">${[i + 1]} . <p> ${
      lists.almostFinishListArray[i]
    } </p>
    <button id="delete-btn" onclick="deleteFromAlmostList(${i})"><i class="fa fa-trash"></i></button></div>`;
  }
}
//function to delete items from second list
function deleteFromAlmostList(i) {
  let confirmUser = prompt("Do you want to delete this from your list? Yes/No");
  if (confirmUser == "yes") {
    lists.almostFinishListArray.splice(i, 1);
  } else {
    alert("nothing deleted from this list");
  }
  showalmostFinishList();
  console.log(lists.almostFinishListArray);
}
// function to add item and price in third list
function addToBuyList() {
  let needToBuyInput = document.getElementById("need-to-buy").value;
  let productPrice = parseInt(document.getElementById("product-price").value);
  if (isNaN(productPrice) || needToBuyInput == "") {
    alert("enter both : product and price");
  } else if (productPrice === 0) {
    alert("price can not be 0");
  } else {
    lists.needTOBuyListArray.push({
      name: needToBuyInput,
      price: productPrice,
    });
  }
  showToBuyList();
  document.getElementById("need-to-buy").value = "";
  document.getElementById("product-price").value = "";
}
//function to show item and price list and total price
function showToBuyList() {
  total = 0;
  needTOBuyList.innerHTML = "";
  for (let i = 0; i < lists.needTOBuyListArray.length; i++) {
    needTOBuyList.innerHTML += `<div class="item-and-price">${[i + 1]} .<p> ${
      lists.needTOBuyListArray[i].name
    }</p><p>${lists.needTOBuyListArray[i].price} </p>
    <button id="delete-btn" onclick="deleteFromBuyList(${i})"><i class="fa fa-trash"></i></button></div>
    `;
  }
  for (let i = 0; i < lists.needTOBuyListArray.length; i++) {
    total += lists.needTOBuyListArray[i].price;
  }
  totalPrice.innerHTML = `<h3>  Total amount : ${total} NOK</h3>`;
}
function deleteFromBuyList(i) {
  let confirmUser = prompt("Do you want to delete this from your list? Yes/No");
  if (confirmUser == "yes") {
    lists.needTOBuyListArray.splice(i, 1);
  } else {
    alert("nothing deleted from this list");
  }
  showToBuyList();
}
