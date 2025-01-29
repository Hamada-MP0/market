//open close cart


var cart =document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active");

}

function close_cart(){
    cart.classList.remove("active");
    
}

//end 
// open menu

var menu =document.querySelector('#menu');
function open_menu(){
  menu.classList.add("active");

}

function close_menu(){
  menu.classList.remove("active");
  
}
// open filter

var filter =document.querySelector('.filter');
function open_filter(){
  filter.classList.toggle("active");

}



  // add item in cart  
  

  var all_products_json;
  var item_in_cart=document.querySelector(".item-in-cart");
  let product_cart=[];
  function addTocart(id,btn)
  {
    product_cart.push(all_products_json[id]);
    btn.classList.add("active");
    getCartItem();
  }


let count_item=document.querySelector(".count-item");
let count_item_cart=document.querySelector(".count_item_cart");
let price_cart_total=document.querySelector(".price-cart-total");
 let  price_cart_Head=document.querySelector(".price-cart-Head");

  function getCartItem()
  {

    let totalPrice= 0;
    let item_c= "";
    for(let i=0;i<product_cart.length;i++)
    {
      item_c+=`
       <div class="item-cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price-cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
      
     `
     totalPrice+=product_cart[i].price;
    }
    item_in_cart.innerHTML=item_c;
   price_cart_Head.innerHTML="$"+totalPrice;
   count_item.innerHTML=product_cart.length;
   count_item_cart.innerHTML= "("+ product_cart.length +" Item in cart)";
   price_cart_total.innerHTML="$"+totalPrice;
  }
  function remove_from_cart(index)
  {
    product_cart.splice(index,1);
    getCartItem();
    let addToCartButton = document.querySelectorAll(".fa-cart-shopping")
    for (let i = 0; i < addToCartButton.length; i++) {
      addToCartButton[i].classList.remove("active")
      product_cart.forEach(product =>{
        if(product.id==i){
          addToCartButton[i].classList.add("active")
        }
      })
    }
    
  }

  // back_to_top


  let back_to_top=document.querySelector(".back_to_top");
  back_to_top.addEventListener("click",function(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
     
    })
  })  
  
//////////////////////////////////////////////////////////////////////////

// <!-- Initialize Swiper -->

var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    
    },
    autoplay: {
      delay: 2000,

    },
    loop: true,
    
   
  });
  /////////////////////////////////
//   sale_sec
var swiper = new Swiper(".sale_sec", {
   
    slidesPerView:5,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
   
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    
   // responsive
   breakpoints: {
     1600: {
       slidesPerView: 5,
     },
     1200:{
       slidesPerView: 4,
     },
     800:{
       slidesPerView: 3,
       spaceBetween:20,
     },
     300: {
       slidesPerView: 2,
       spaceBetween:10,
     },
     0:{
       slidesPerView: 1,
       spaceBetween:5,
     }
   
     
   }
  });
  // End 
   


  var swiper = new Swiper(".product_swip", {
   
    slidesPerView:4,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
   
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
       // responsive
   breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 2,
      spaceBetween:20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween:10,
    },
    0:{
      slidesPerView: 2,
      spaceBetween:5,
    }
  
    
  }
   
  });

/////////////////////////////////////////////////////////////////////



function showsection(sectionId) {
  // إخفاء جميع الأقسام
  const sections = document.querySelectorAll('.lili');
  sections.forEach(section => {
    section.classList.remove('active'); // إضافة فئة الإخفاء لجميع الأقسام
  
  });
  // إظهار القسم المطلوب
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
   
  }
}