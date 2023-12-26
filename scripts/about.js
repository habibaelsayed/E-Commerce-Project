var itemsnum = document.cookie.split(';');
itemsnum = itemsnum[itemsnum.length-1].split('=');
itemsnum = itemsnum[0].split(':');
itemsnum = itemsnum[1];
if(!isNaN(itemsnum))
{document.getElementById("itemCount").innerHTML = itemsnum;}

function showCart() {

  var cartWindow = window.open('cart.html', "_self");

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