var itemsnum = document.cookie.split(';');
itemsnum = itemsnum[itemsnum.length-1].split('=');
itemsnum = itemsnum[0].split(':');
itemsnum = itemsnum[1];
if(!isNaN(itemsnum))
{document.getElementById("itemCount").innerHTML = itemsnum;}

function showCart() {

  var cartWindow = window.open('cart.html', "_self");

}

