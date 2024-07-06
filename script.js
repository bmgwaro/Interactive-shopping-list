document.addEventListener("DOMContentLoaded", () => {
    
    const addButton=document.getElementById("add");
    
    addButton.addEventListener("click", (event)=>{
        event.preventDefault();
        let shoppingList = [];
        let shopping = document.getElementById("shopping_items").value;
        shoppingList.push(shopping);
        

        shoppingList.forEach((item) => {
        document.getElementById("listed")
        let li = document.createElement("li");
        li.textContent = item;
        listed.appendChild(li)


        li.addEventListener("click", ()=>{
            li.classList.toggle("purchased")
        })
    })

    
    const purchased=document.getElementById("markPurchased")

    purchased.addEventListener("click", ()=>{
        let bought=document.getElementById("list_output")
        bought.style.backgroundColor="chartreuse"
    })


    const eraseButton=document.getElementById("clearList")
    eraseButton.addEventListener("click", ()=>{
        shoppingList=[]
        const listOutput=document.getElementById("list_output")
        listOutput.innerHTML=""
    })
    
    })
});