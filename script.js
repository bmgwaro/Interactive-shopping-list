document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
//this callback function is responsible for assigning values to the array after the add button is clicked
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let shoppingList = [];
    let shopping = document.getElementById("shopping_items").value;
    shoppingList.push(shopping);

//here, the assigned value is presented to the user as output
    shoppingList.forEach((item) => {
      document.getElementById("listed");
      let li = document.createElement("li");
      li.textContent = item;
      listed.appendChild(li);

//this next callback function is for assigning purchased tems if they are clicked
      li.addEventListener("click", () => {
        li.classList.toggle("purchased");
      });
    });

    const purchased = document.getElementById("markPurchased");
//here I have another function for marking all itms as purchased when the mark purchased button is clicked
    purchased.addEventListener("click", () => {
      let bought = document.getElementById("list_output");
      bought.style.backgroundColor = "chartreuse";
    });

//finally, I have a function that clears the shopping list when the user clicks on the clear list button
    const eraseButton = document.getElementById("clearList");
    eraseButton.addEventListener("click", () => {
      shoppingList = [];
      const listOutput = document.getElementById("list_output");
      listOutput.innerHTML = "";
    });
  });
});
