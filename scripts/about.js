
if(!isNaN(getCookie('itemsnum')))
{document.getElementById("itemCount").innerHTML = getCookie('itemsnum');}
else {document.getElementById("itemCount").innerHTML = 0;}
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