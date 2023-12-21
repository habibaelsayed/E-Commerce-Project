
var imgs = ['1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg', '6.jpg']
var slider = document.getElementById('slider');
var pos = 0;
var allProductsTab = document.getElementById("allProducts");
var phones = document.getElementById("phones");
var laptops = document.getElementById("laptops");
var fragrances = document.getElementById("fragrances");
var watches = document.getElementById('watches');
var furniture = document.getElementById('furniture');
var itemCount = document.getElementById('itemCount');
var itemNum = 0;
var addedProducts = [];
var fullData = [];

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}




function changeSlide(){
    if(pos < imgs.length)
    {
        slider.innerHTML = `<img src="./imgs/${imgs[pos++]}">`;
    }else pos = 0;
}
setInterval(changeSlide, 1500);


function showProducts(){
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
                var product = document.createElement('div');
                product.classList.add('card');
                product.style.width = '18rem';
                product.style.height = '500px';
                product.innerHTML = `
                <img src='${data[i].images[0]}' width='300px' height='200px' class="card-img-top" alt="...">
                <div class="card-body" id='${data[i].id}'>
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].description}</p>
                <p class="card-text">Price:${data[i].price}$</p>
                <a href="#" class="btn btn-success">+</a>
                <a href="#" class="btn btn-danger">-</a>
                </div>
                `
                products.appendChild(product);
                if(!hasClass(allProductsTab, 'active'))
                    allProductsTab.classList.add('active');

                phones.classList.remove('active');
                laptops.classList.remove('active');
                fragrances.classList.remove('active');
                watches.classList.remove('active');
                furniture.classList.remove('active');

                fullData.push(data[i]);

            }
        }
    }

    xhr.open("GET", 'https://dummyjson.com/products');
    xhr.send("");
}


function showPhones(){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var data = JSON.parse(xhr.response);
            console.log(data);
            data = data.products;
            var products = document.getElementById("products");
            products.innerHTML = '';
            fullData = [];
            for(var i=0;i<data.length;i++){
                var product = document.createElement('div');
                product.classList.add('card');
                product.style.width = '18rem';
                product.style.height = '500px';
                product.innerHTML = `
                <img src='${data[i].images[0]}' width='300px' height='200px' class="card-img-top" alt="...">
                <div class="card-body" id='${data[i].id}'>
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].description}</p>
                <p class="card-text">Price:${data[i].price}$</p>
                <a href="#" class="btn btn-success">+</a>
                <a href="#" class="btn btn-danger">-</a>
                </div>
                `
                products.appendChild(product);

                if(!hasClass(phones, 'active'))
                    phones.classList.add('active');

                allProductsTab.classList.remove('active');
                laptops.classList.remove('active');
                fragrances.classList.remove('active');
                watches.classList.remove('active');
                furniture.classList.remove('active');

                fullData.push(data[i]);
            }
        }
    }

    xhr.open("GET", 'https://dummyjson.com/products/category/smartphones');
    xhr.send("");

}

function showLaptops(){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var data = JSON.parse(xhr.response);
            console.log(data);
            data = data.products;
            var products = document.getElementById("products");
            products.innerHTML = '';
            fullData = [];
            for(var i=0;i<data.length;i++){
                var product = document.createElement('div');
                product.classList.add('card');
                product.style.width = '18rem';
                product.style.height = '500px';
                product.innerHTML = `
                <img src='${data[i].images[0]}' width='300px' height='200px' class="card-img-top" alt="...">
                <div class="card-body" id='${data[i].id}'>
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].description}</p>
                <p class="card-text">Price:${data[i].price}$</p>
                <a href="#" class="btn btn-success">+</a>
                <a href="#" class="btn btn-danger">-</a>
                </div>
                `
                products.appendChild(product);

                if(!hasClass(laptops, 'active'))
                    laptops.classList.add('active');

                allProductsTab.classList.remove('active');
                phones.classList.remove('active');
                fragrances.classList.remove('active');
                watches.classList.remove('active');
                furniture.classList.remove('active');

                fullData.push(data[i]);

            }
        }
    }

    xhr.open("GET", 'https://dummyjson.com/products/category/laptops');
    xhr.send("");

}

function showFragrances(){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var data = JSON.parse(xhr.response);
            console.log(data);
            data = data.products;
            var products = document.getElementById("products");
            products.innerHTML = '';
            fullData = [];
            for(var i=0;i<data.length;i++){
                var product = document.createElement('div');
                product.classList.add('card');
                product.style.width = '18rem';
                product.style.height = '500px';
                product.innerHTML = `
                <img src='${data[i].images[0]}' width='300px' height='200px' class="card-img-top" alt="...">
                <div class="card-body" id='${data[i].id}'>
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].description}</p>
                <p class="card-text">Price:${data[i].price}$</p>
                <a href="#" class="btn btn-success">+</a>
                <a href="#" class="btn btn-danger">-</a>
                </div>
                `
                products.appendChild(product);

                if(!hasClass(fragrances, 'active'))
                    fragrances.classList.add('active');

                allProductsTab.classList.remove('active');
                phones.classList.remove('active');
                laptops.classList.remove('active');
                watches.classList.remove('active');
                furniture.classList.remove('active');

                fullData.push(data[i]);

            }
        }
    }

    xhr.open("GET", 'https://dummyjson.com/products/category/fragrances');
    xhr.send("");
}

function showFurniture(){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var data = JSON.parse(xhr.response);
            console.log(data);
            data = data.products;
            var products = document.getElementById("products");
            products.innerHTML = '';
            fullData = [];
            for(var i=0;i<data.length;i++){
                var product = document.createElement('div');
                product.classList.add('card');
                product.style.width = '18rem';
                product.style.height = '500px';
                product.innerHTML = `
                <img src='${data[i].images[0]}' width='300px' height='200px' class="card-img-top" alt="...">
                <div class="card-body" id='${data[i].id}'>
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].description}</p>
                <p class="card-text">Price:${data[i].price}$</p>
                <a href="#" class="btn btn-success">+</a>
                <a href="#" class="btn btn-danger">-</a>
                </div>
                `
                products.appendChild(product);

                if(!hasClass(furniture, 'active'))
                    furniture.classList.add('active');

                allProductsTab.classList.remove('active');
                phones.classList.remove('active');
                laptops.classList.remove('active');
                watches.classList.remove('active');
                fragrances.classList.remove('active');

                fullData.push(data[i]);

            }
        }
    }

    xhr.open("GET", 'https://dummyjson.com/products/category/furniture');
    xhr.send("");

}

function showWatches(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var data = JSON.parse(xhr.response);
            console.log(data);
            data = data.products;
            var products = document.getElementById("products");
            products.innerHTML = '';
            fullData = [];
            for(var i=0;i<data.length;i++){
                var product = document.createElement('div');
                product.classList.add('card');
                product.style.width = '18rem';
                product.style.height = '500px';
                product.innerHTML = `
                <img src='${data[i].images[0]}' width='300px' height='200px' class="card-img-top" alt="...">
                <div class="card-body" id='${data[i].id}'>
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].description}</p>
                <p class="card-text">Price:${data[i].price}$</p>
                <a href="#" class="btn btn-success">+</a>
                <a href="#" class="btn btn-danger">-</a>
                </div>
                `
                products.appendChild(product);

                if(!hasClass(watches, 'active'))
                    watches.classList.add('active');

                allProductsTab.classList.remove('active');
                phones.classList.remove('active');
                laptops.classList.remove('active');
                furniture.classList.remove('active');
                fragrances.classList.remove('active');

                fullData.push(data[i]);

            }
        }
    }

    xhr.open("GET", 'https://dummyjson.com/products/category/furniture');
    xhr.send("");
}


function addItem(e){
    var element = e.target;

    itemNum++;
    itemCount.innerHTML = itemNum;
}

function removeItem(e){
    if(item>0)
    {
        itemNum++;
        itemCount.innerHTML = itemNum;
    }
}

{/* <div class="card" style="width: 18rem;">
            <img src="./imgs/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">+</a>
              <a href="#" class="btn btn-primary">-</a>
            </div>
          </div> */}

showProducts();