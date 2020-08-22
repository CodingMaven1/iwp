var id = document.querySelector("#id").value;
var name = document.querySelector("#name").value;
var dropdown = document.querySelector("#dropdown").value;
var price = document.querySelector("#price").value;
var dop = document.querySelector("#dop").value;
var email = document.querySelector("#email").value;
var num = document.querySelector("#num").value;
var total = document.querySelector("#total").value;


document.getElementsByClassName('Form')[0].addEventListener("submit", (e) => {
    e.preventDefault(); 
    var idarr = id.split("-")
    var pattern = /^[0-9]+$/;
    console.log(num)
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(idarr[0].length != 3 || idarr[1].length != 6){
        alert("Please enter the correct format for Product ID!")
        return;
    }
    if(name.length > 50){
        alert("The length of the name cannot exceed 50!")
        return;
    }
    if(parseInt(price) > 9999 || parseInt(price) < 100){
        alert("The Prize value has to be between 100-9999.")
        return;
    }
    if(num.match(pattern) == false || num.length != 10){
        alert("Please enter the Contact number in right format!");
        return;
    }
    if(regex.test(String(email).toLowerCase()) == false){
        alert("Please enter a valid email address");
        return;    
    }
    else{
        alert("Your Entry was made!")
    }
})
