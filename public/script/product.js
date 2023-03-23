let p_num = 0
const fetchProducts = async (x) => {
  const res = await fetch(`/products/${p_num}`)
  let data = await res.json() 
    const array= data.p_array
    for ( let i = 0; i < array.length; i++) {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
                <div class="product_img">
                   <img src="${array[i].img}" alt="">
                </div>
               <div class="details">
                      <h3>
                       ${array[i].name}
                      </h3>
                      <button onclick="showDetails(${array[i].id})">
                        View Product
                      </button>
               </div>   `
        document.getElementById("card_container").appendChild(card)
        p_num++
      }
    console.log(p_num)
    if (p_num >= data.len)
      document.getElementById("view").style.display = 'none'
  }
fetchProducts(p_num)
document.getElementById("view").addEventListener("click", () => {
  fetchProducts(p_num)
})
const showDetails = async (id) => {
  const res = await fetch(`/details/${id}`)
  const data = await res.json()
  const div = document.createElement("div")
  div.id = "detailBox"
  div.className = "detail_card_container"
  div.innerHTML = ` 
    <div class="detail_card">
      <div class="product_imgage_container">
        <img src="${data.img}" alt="">
      </div>
       <div class="product_details_container">
           <div class="text_details">
                <h1>
                  ${data.name}
                </h1>
                <p>
                ${data.des}
                </p>
                <h2>
                &#8377 ${data.price}
                </h2>
              
           </div>
           <div class="order_button">
              <button>
                Order Now
              </button>
              <button onclick=" cart(${data.id})">
                Add to Cart
              </button>
           </div>
       </div>
    
    </div>
    <h1 class="cancel" id="close"  >
    X
  </h1>    `
  document.body.appendChild(div)
  document.getElementById("close").addEventListener("click", () => {
    div.remove()
  })
}
const cart = async (id) => {
   try{
    let user_id=undefined;
    user_id= sessionStorage.getItem("token")
  const res = await fetch(`/cart/${id}/add`)
  const data= await res.json()
  if (data.status == true) {
    const id=sessionStorage.getItem("id")
    location.href=location.origin+`/showcart/${id}`
  }
  else if(data.status==false){
        alert(data.message)
  }else{  
     location.href=location.origin+"/signin"   
  }
   }catch(e){
    console.log(e)
   }
}


