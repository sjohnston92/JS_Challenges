// setting a state of cart empty
let state ={
  items: ["Shirt","Pants","Socks"],
}
let cart = []; 

// creating a onclick/listener method for items
function renderItems() {
  let itemsHtml = "";
  state.items.forEach(function (items, index) {
    itemsHtml += `<button class='item' onclick='itemsClicked(${index})'>${items}</button>`;
  });
  return itemsHtml;
}

//onclock function
function itemsClicked(index){ 
  cart.push(state.items[index]); 
  document.getElementById("cart").innerHTML = cart; 
} 

//creating a function to move items into cart
function addCart(){

}


//render html
function render() {
  let htmlStr = `
    <div>
      <h1>Shopping Cart</h1>
      <br>
      <div class="items">
      ITEM OPTIONS:${renderItems()}
      </div>
      
      <div id="cart">
    
    </div>
    </div>
  
  `;
  document.getElementById("shop_cart").innerHTML = htmlStr;
}

render();