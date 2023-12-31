var cartProducts = [];

if(!isNaN(getCookie('itemsnum')))
{document.getElementById("itemCount").innerHTML = getCookie('itemsnum');}
function getCookie(cookieName) {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName + '=') === 0) {
      return cookie.substring(cookieName.length + 1);
    }
  }

  return null;
}

function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

function extractProducts(){
    var products = document.cookie.split(";");
    for(var i=0;i<products.length;i++)
    {
        products[i] = products[i].split('=');
        // products[0] = products[0].trim();
        console.log(products[i]);
    }

    for(var i=0;i<products.length;i++)
    {
        var productInfo = products[i][0];

        console.log(productInfo);
        
        var unescapedString = productInfo.replace(/\\/g, '');
        if(!isValidJSON(productInfo)) continue;

        var jsObject = JSON.parse(unescapedString);
        jsObject.quantity = Number(products[i][1]);
        console.log(jsObject);
        cartProducts.push(jsObject);


    }



}


function displayCart(){
    for(var i=0;i<cartProducts.length;i++)
    {
        

        var cartItems = document.getElementById("cartItems");
        var oneItem = document.createElement('div');
        oneItem.setAttribute('class', 'card mb-3');
        oneItem.style.width = 'width:600px';
        oneItem.id = i;
        oneItem.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
              <img src="${cartProducts[i].image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${cartProducts[i].title}</h5>
                <p class="card-text">Quantity: ${cartProducts[i].quantity}</p>
                <p class="card-text">Price: ${cartProducts[i].price}$</p>
                <button class="btn btn-success" onclick="add(event)">+</button>
                <button class="btn btn-danger" onclick="remove(event)">-</button>
              </div>
            </div>
          </div>
        `

        cartItems.prepend(oneItem);

    }
    
}

extractProducts();

displayCart();

updatePrice();

function add(event){
  var card = event.target;
  card = card.parentElement.parentElement.parentElement.parentElement;
  console.log(card);
  var cardid = card.id;
  cartProducts[cardid].quantity += 1;
  console.log(cartProducts[cardid]);
  card.childNodes[1].childNodes[3].childNodes[1].querySelector('p').innerHTML = `Quantity: ${cartProducts[cardid].quantity}`;
  document.cookie = `itemsnum = ${Number(document.getElementById("itemCount").innerText) + 1}`;
  document.getElementById("itemCount").innerText = Number(document.getElementById("itemCount").innerText) + 1;
  updatePrice();
}


function remove(event){
  var card = event.target;
  card = card.parentElement.parentElement.parentElement.parentElement;
  console.log(card);
  var cardid = card.id;
  if(cartProducts[cardid].quantity>1)
  {
    cartProducts[cardid].quantity -= 1;
    card.childNodes[1].childNodes[3].childNodes[1].querySelector('p').innerHTML = `Quantity: ${cartProducts[cardid].quantity}`;
  }else {
    cartProducts[cardid].quantity -= 1;
    document.getElementById(`${cardid}`).remove();
  }
  document.cookie = `itemsnum = ${Number(document.getElementById("itemCount").innerText) - 1}`;
  document.getElementById("itemCount").innerText = Number(document.getElementById("itemCount").innerText) - 1;
  console.log(cartProducts[cardid]);
  updatePrice();
}

function updatePrice(){
  if(cartProducts.length) 
  {
    document.getElementById("confirm").style.display = "block";
    var totalPrice = 0;
    for(var i=0;i<cartProducts.length;i++)
    {
      totalPrice += (cartProducts[i].price * cartProducts[i].quantity);
    }
    document.getElementById('totalPrice').innerHTML = `<span style="color:red">Total Price:</span> ${totalPrice}$`;
  }
}

function emptyName(){
  var Name = document.getElementById("inName").value;
  var spanName = document.getElementById("name");
  if(Name == "" || !isNaN(Name)){
      spanName.innerHTML = "Name is required or not valid";
      spanName.style.display = "block";
      return false;
      // spanName.setAttribute("spancol", "2");
  } else  spanName.style.display = "none"; return true;
}


function invalidMail(){
  var Email = document.getElementById("inEmail").value;
  var spanEmail = document.getElementById("email");
  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)){
      spanEmail.innerHTML = "Email is not valid";
      spanEmail.style.display = "block";
      return false;
      // spanName.setAttribute("spancol", "2");
  } else spanEmail.style.display = "none"; return true;

}

function emptyAddress(){
  var inAddress = document.getElementById("inAddress").value;
  var address = document.getElementById("address");
  var city = document.getElementById("city");
  if(inAddress == "" || !isNaN(inAddress)){
      address.innerHTML = "Address is required";
      address.style.display = "block";
      city.innerHTML = "Address is required";
      city.style.display = "block";
      return false;
      // spanName.setAttribute("spancol", "2");
  } else  {address.style.display = "none"; city.style.display = "none"; return true;}
}

function emptyCard(){
  var inCard = document.getElementById("inCard").value;
  var card = document.getElementById("card");

  if(inCard.length < 16){
      card.innerHTML = "Card number is not valid";
      card.style.display = "block";
      return false;
      // spanName.setAttribute("spancol", "2");
  } else  card.style.display = "none"; return true;
}

function validateForm(e){
  e.preventDefault();

  emptyName();
  invalidMail();
  emptyAddress();
  emptyCard();

  if(emptyName() && invalidMail() && emptyAddress() && emptyCard()){
    document.getElementById('successOrder').style.display = "block";
    document.cookie = `itemsnum = 0`;
    document.getElementById("itemCount").innerHTML = 0;
  }

}

function cancelForm(){
  document.getElementById("orderForm").style.display = "none";
}


function confirmOrder(){
  document.getElementById("orderForm").style.display = "block";
}


function searchProduct(e){
  e.preventDefault();
  window.open('index.html', "_self");
  var productVal = document.getElementById("search").value;
  showProduct(`https://dummyjson.com/products/search?q=${productVal}`);

  
  allProductsTab.classList.remove('active');
  phones.classList.remove('active');
  laptops.classList.remove('active');
  fragrances.classList.remove('active');
  watches.classList.remove('active');
  furniture.classList.remove('active');
  jewellery.classList.remove('active');
}