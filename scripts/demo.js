// document.getElementById("itemCount").innerHTML = getCookie('itemsnum');
var imgs = ['1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg', '6.jpg']
var slider = document.getElementById('slider');
var pos = 0;
var allProductsTab = document.getElementById("allProducts");
var phones = document.getElementById("phones");
var laptops = document.getElementById("laptops");
var fragrances = document.getElementById("fragrances");
var watches = document.getElementById('watches');
var furniture = document.getElementById('furniture');
var jewellery = document.getElementById('jewellery');
var itemCount = document.getElementById('itemCount');
var itemNum = 0;
var mappedProducts = new Map();
var productsAdded = [];
var fullData = [];

var itemsnum = document.cookie.split(';');
itemsnum = itemsnum[itemsnum.length-1].split('=');
itemsnum = itemsnum[0].split(':');
itemsnum = itemsnum[1];
if(!isNaN(itemsnum))
{document.getElementById("itemCount").innerHTML = itemsnum;
itemNum = itemsnum;}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}


function changeSlide(){
    if(pos < imgs.length)
    {
        slider.innerHTML = `<img src="/imgs/${imgs[pos++]}">`;
    }else pos = 0;
}
setInterval(changeSlide, 1500);


function showProduct(link){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var data = JSON.parse(xhr.response);
            console.log(data);
            data = data.products;
            fullData = [];
            var products = document.getElementById("products");
            products.innerHTML = '';
            for(var i=0;i<data.length;i++){
                fullData.push(data[i]);
                var product = document.createElement('div');
                product.classList.add('card');
                product.style.width = '18rem';
                product.style.height = '500px';
                product.innerHTML = `
                <img src='${data[i].images[0]}' width='300px' height='200px' class="card-img-top" alt="...">
                <div class="card-body" id='${fullData.indexOf(data[i])}'>
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].description}</p>
                <p class="card-text">Price: ${data[i].price}$</p>
                <button href="#" class="btn btn-success" onclick='addItem(event)'>Add to cart</button>
                </div>
                `
                products.appendChild(product);


            }
        }
    }

    xhr.open("GET", link);
    xhr.send("");


}

function searchProduct(e){
    e.preventDefault();
    // window.open('index.html', "_self");
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

function showProducts(){
    
    showProduct('https://dummyjson.com/products');

    if(!hasClass(allProductsTab, 'active'))
        allProductsTab.classList.add('active');

    phones.classList.remove('active');
    laptops.classList.remove('active');
    fragrances.classList.remove('active');
    watches.classList.remove('active');
    furniture.classList.remove('active');
    jewellery.classList.remove('active');

}


function showPhones(){

    showProduct('https://dummyjson.com/products/category/smartphones');
    if(!hasClass(phones, 'active'))
        phones.classList.add('active');

    allProductsTab.classList.remove('active');
    laptops.classList.remove('active');
    fragrances.classList.remove('active');
    watches.classList.remove('active');
    furniture.classList.remove('active');
    jewellery.classList.remove('active');
    

}

function showLaptops(){
    
    showProduct('https://dummyjson.com/products/category/laptops');
    if(!hasClass(laptops, 'active'))
        laptops.classList.add('active');

    allProductsTab.classList.remove('active');
    phones.classList.remove('active');
    fragrances.classList.remove('active');
    watches.classList.remove('active');
    furniture.classList.remove('active');
    jewellery.classList.remove('active');

}

function showFragrances(){
    
    showProduct('https://dummyjson.com/products/category/fragrances');
    if(!hasClass(fragrances, 'active'))
        fragrances.classList.add('active');

    allProductsTab.classList.remove('active');
    phones.classList.remove('active');
    laptops.classList.remove('active');
    watches.classList.remove('active');
    furniture.classList.remove('active');
    jewellery.classList.remove('active');

}

function showFurniture(){
    
    showProduct('https://dummyjson.com/products/category/furniture');
    if(!hasClass(furniture, 'active'))
        furniture.classList.add('active');

    allProductsTab.classList.remove('active');
    phones.classList.remove('active');
    laptops.classList.remove('active');
    watches.classList.remove('active');
    fragrances.classList.remove('active');
    jewellery.classList.remove('active');

}

function showWatches(){
    
    showProduct('https://dummyjson.com/products/category/mens-watches');
    if(!hasClass(watches, 'active'))
        watches.classList.add('active');

    allProductsTab.classList.remove('active');
    phones.classList.remove('active');
    laptops.classList.remove('active');
    furniture.classList.remove('active');
    fragrances.classList.remove('active');
    jewellery.classList.remove('active');
}

function showJewellery(){

    showProduct('https://dummyjson.com/products/category/womens-jewellery')
    if(!hasClass(jewellery, 'active'))
        jewellery.classList.add('active');

    allProductsTab.classList.remove('active');
    phones.classList.remove('active');
    laptops.classList.remove('active');
    furniture.classList.remove('active');
    fragrances.classList.remove('active');
    watches.classList.remove('active');
}


function addItem(e){
    var element = e.target;

    var itemId = element.parentNode.id;
    
    item = fullData[itemId];
    item = {title: item.title, price:item.price, image: item.images[0]};

    console.log(item);
    var itemKey = JSON.stringify(item);

    if(mappedProducts.has(itemKey))
    {
        var num = mappedProducts.get(itemKey);
        mappedProducts.set(itemKey, ++num);
        document.cookie = `${itemKey} = ${num}`
    } 
    else
    {
        mappedProducts.set(itemKey, 1);
        productsAdded.push(item);
        document.cookie = `${itemKey} = 1`
    }


    itemNum++;
    document.getElementById("itemCount").innerHTML = itemNum;
    document.cookie = `itemsnum: ${itemNum}`;

}

function showCart() {

    var cartWindow = window.open('cart.html', "_self");

}

// function setCookies(){

//     for (var [key, value] of mappedProducts) {
//         document.cookie = `${key}= ${value}`;
//     }

// }


{/* <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div> */}

// function takeCartData(e){
//     var el = e.target();
//     var Window = el.getAttribute('href');
//     Window = window.open(Window);
//     Window.productsAdded = productsAdded;
//     Window.mappedProducts = mappedProducts;
//     Window.itemCount =  itemCount;
// }
function getCookie(cookieName) {
    // Split the cookie string into individual cookies
    var cookies = document.cookie.split(';');
  
    // Iterate through the cookies to find the one with the specified name
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      // Check if this is the cookie you are looking for
      if (cookie.indexOf(cookieName + '=') === 0) {
        // Extract and return the cookie value
        return cookie.substring(cookieName.length + 1);
      }
    }
  
    // Return null if the cookie is not found
    return null;
  }


showProducts();