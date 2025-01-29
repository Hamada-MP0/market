

fetch('js/items.json')
      .then(response => response.json())
      .then(data => {
      const swiper_item_sale =document.getElementById("swiper_item_sale ");
     
      const other_product_swiper=document.getElementById("other_product_swiper");
      const other_product_swiper2=document.getElementById("other_product_swiper2");

      all_products_json=data;

      data.forEach(product => {
        if(product.old_price)
        {
            const discount = Math.floor(((product.old_price - product.price) / product.old_price) * 100);
            swiper_item_sale.innerHTML +=`
            
             <div class="product swiper-slide ">

                    <div class="icon">
                        <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>   
                        <span><i class="fa-solid fa-heart"></i> </span>       
                        <span><i class="fa-solid fa-share"></i></span>   
                    </div>

                    <span class="sale_person">%${discount}</span>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt  ="">

                    </div>
                    <h3 class="name_product"><a href="#">${product.name}</a></h3>
                        <div class="starts">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                </div>
            
            
            `
        }
      });

      data.forEach(product => {
        
            other_product_swiper.innerHTML +=`
            
             <div class="product swiper-slide image">

                    <div class="icon">
                        <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>   
                        <span><i class="fa-solid fa-heart"></i> </span>       
                        <span><i class="fa-solid fa-share"></i></span>   
                    </div>

                 
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt  ="">

                    </div>
                    <h3 class="name_product"><a href="#">${product.name}</a></h3>
                        <div class="starts">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                          
                        </div>
                </div>
                        
            `
      });

      data.forEach(product => {
        
        other_product_swiper2.innerHTML +=`
        
         <div class="product swiper-slide image">

                <div class="icon">
                    <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>   
                    <span><i class="fa-solid fa-heart"></i> </span>       
                    <span><i class="fa-solid fa-share"></i></span>   
                </div>

             
                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt  ="">

                </div>
                <h3 class="name_product"><a href="#">${product.name}</a></h3>
                    <div class="starts">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                      
                    </div>
            </div>
                    
        `
  });
      })
      


    //   /*  item_detail  */


    let bigimg=document.getElementById("bigimg");
    function changeItemImage(img)
    {
        bigimg.src=img;
    }