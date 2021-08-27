let cart_data=JSON.parse(localStorage.getItem("cart"));
console.log(cart_data);

let cartNumbers = JSON.parse(localStorage.getItem("cartNumbers"));
console.log(cartNumbers);
let cart_N = document.querySelector("#cartlogo label").textContent = cartNumbers
let Your_cart = document.querySelector(".yourCart p span").innerHTML = `(${cartNumbers} items)`
let shipping = document.querySelector(".shipping p").textContent = `${cartNumbers} items`
let total_items = document.querySelector(".delivery p span").textContent =`(${cartNumbers} items)`
let data_div=document.getElementById("data")
var final_total=0


cart_data.forEach(function (el) {

  let div = document.createElement("div");
  let img_div = document.createElement("div");
  img_div.setAttribute("class","cart-div")
// img ko img_div me append karna hai
  let img = document.createElement("img");
  img.src = el.img;

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let span_title = document.createElement("span");
  span_title.innerText = el.title;
  // yaha tak image ko append karna hai
  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;
  img_div.append(img,p_name,span_title,p_price);

  

 
  div.append(img_div)

  data_div.append(div);
 let cart_price = cartNumbers*el.price
//  console.log(cart_price)
 final_total =cart_price
 let cart_total1 =document.querySelector(".payment .cart-payment p").textContent= `$${final_total}`

});

var tax = document.getElementById("tax").textContent="$5.00"
let cart_total1 =document.querySelector(".payment .cart-payment p").textContent =`$${final_total}`;
console.log("cart_total1" ,cart_total1);

let total_amount = document.querySelector(".total-payment span").textContent =`$${final_total*1.04}`;


console.log("total_amount", total_amount);
let apply = document.getElementById("Apply");


apply.addEventListener("click",function(){
  
  var promocode = document.getElementById("promocode").value;
  console.log(promocode);
  console.log('clicked');
  if (promocode ==""){
    console.log("clicked2")
    let cart_total1 =document.querySelector(".payment .cart-payment p").textContent =`$${final_total}`;
    //  cart_total1.textContent =`$${final_total}`;
    console.log("cart_total2",cart_total1)
    let total_amount = document.querySelector(".total-payment span").textContent =`${final_total*1.04}`;
  }
  if(promocode == 'Pushpendra21'){
    var total = final_total -(final_total*0.21);
    let cart_total1 =document.querySelector(".payment .cart-payment p").textContent =`$${total}`;
  //  cart_total1.textContent =`$${total}`;
  // total_amount=`${total*1.04}`  
  let total_amount = document.querySelector(".total-payment span").textContent =`${total*1.01}`;
  console.log("cart_total",total);
    console.log(total)
  }
});

var checkout = document.getElementById("total-paymentButton")

