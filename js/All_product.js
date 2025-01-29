


fetch('js/items.json')
      .then(response => response.json())
      .then(data => {
        
      const products_dev=document.getElementById("products_dev");

      all_products_json=data;

      data.forEach(product => {
  

        const old_price_par=product.old_price?`<p class="old_price">$${product.old_price}</p>`:"";   
   

            const discount_dev = product.old_price?` <span class="sale_person">%${ Math.floor(((product.old_price - product.price) / product.old_price) * 100)}</span>`:""; 
            products_dev.innerHTML +=`
            
             <div class="product swiper-slide ">

                    <div class="icon">
                        <span><i onclick="addTocart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>   
                        <span><i class="fa-solid fa-heart"></i> </span>       
                        <span><i class="fa-solid fa-share"></i></span>   
                    </div>

                    ${discount_dev}
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
                          ${old_price_par   }
                        </div>
                </div>
            
            
            `
        
      });


   
      })
      
