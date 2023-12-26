var itemsnum = document.cookie.split(';');
itemsnum = itemsnum[itemsnum.length-1].split('=');
itemsnum = itemsnum[0].split(':');
itemsnum = itemsnum[1];

if(!isNaN(itemsnum))
{document.getElementById("itemCount").innerHTML = itemsnum;}

// document.getElementById("itemCount").innerHTML = itemsnum;
var submit = document.getElementById("submit");

function showCart() {

    window.open('cart.html', "_self");

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



// function invalidPass(){
//     var Password = document.getElementById("inPass").value;
//     var spanPass = document.getElementById("password");
//     if(Password.length < 8){
//         spanPass.innerHTML = "Password should be 8 character or more";
//         spanPass.style.display = "block";
//         // spanName.setAttribute("spancol", "2");
//     } else spanPass.style.display = "none";

//     console.log(spanPass)
// }


function checkGender(){
    var Gender = document.getElementsByName("gender");
    // e.preventDefault();
    var flag = false;
    for(var i=0 ;i<Gender.length;i++)
    {
        if(Gender[i].checked){
            flag = true;
            break;
        }
    }
    var spanGen = document.getElementById("gender");
    if(!flag){
        spanGen.innerHTML = "Please select a gender";
        spanGen.style.display = "block";
        return false;
        // spanName.setAttribute("spancol", "2");
    }
    else spanGen.style.display = "none"; return true;
}

// function checkSports(){
//     // e.preventDefault();
//     var sports = document.getElementsByName("sport");
//     var flag = 0;
//     for(var i=0 ;i<sports.length;i++)
//     {
//         if(sports[i].checked){
//             flag++;
//         }
//     }
//     var spanSport = document.getElementById("sport");
//     if(flag < 2){
//         spanSport.innerHTML = "Please select at least two sports";
//         spanSport.style.display = "block";
//         return false;
//         // spanName.setAttribute("spancol", "2");
//     }
//     else spanSport.style.display = "none"; return true;
// }

function selectCountry(){
    var select = document.getElementById('select').value;
    // e.preventDefault();
    var spanCountry = document.getElementById('country');
    if(select == "none")
    {
        spanCountry.innerHTML = "Please select a Country";
        spanCountry.style.display = "block";
        return false;
        // spanName.setAttribute("spancol", "2");
    }
    else spanCountry.style.display = "none"; return true;

}


function emptyComment(){
    var Comment = document.getElementById("floatingTextarea2").value;
    var spanName = document.getElementById("comment");
    if(Comment == "" || !isNaN(Comment)){
        spanName.innerHTML = "You should leave a message";
        spanName.style.display = "block";
        return false;
        // spanName.setAttribute("spancol", "2");
    } else  spanName.style.display = "none"; return true;

    console.log(spanName)
}

function resetForm(){
    var form = document.getElementById('form');
    form.reset();
}

function validateForm(e){
    e.preventDefault();
    checkGender();
    // checkSports();
    selectCountry();
    emptyName();
    invalidMail();
    emptyComment();
    // invalidPass();
    if(checkGender() && selectCountry() && emptyName() && invalidMail() && emptyComment()){
        
        var dataCompleted = document.getElementById("success");
        dataCompleted.innerHTML = `
            <h3 style="color: rgb(7, 179, 7);">Your form submitted succesfully!!</h3>
            <h4>We will contact you soon!</h4>
            <p>Name: ${document.getElementById("inName").value}</p>
            <p>Email: ${document.getElementById("inEmail").value}</p>
            <p>Country: ${document.getElementById('select').value}</p>
            <p>Your message: ${document.getElementById("floatingTextarea2").value}</p>
        
        `
        dataCompleted.style.display = "block";
    }

}


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


submit.addEventListener("click", validateForm);
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