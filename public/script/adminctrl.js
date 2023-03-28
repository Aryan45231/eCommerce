alert("connnectd")
const edit = async (id) => {
  let ischanged = false;
  const res = await fetch(`/updateproduct/${id}/read`)
  const data = await res.json()
  console.log(data)

  const div = document.createElement("div")
  div.className = "background"
  div.innerHTML = `   <form class="edit_panel" id="editform" enctype="multipart/form-data">
         <div class="product_edit_content">
            <h1> Your Product details</h1>
             <div class="product_Content">
                <h2> Product Name </h2>
                 <input type="text" id="name"  value=" ${data.name}">
                 <div class="num_content_fo_product">
                    <h2> Price</h2>
                    <input type="number" value="${data.price}" name="prie" id="price">
                    <h2> Stock</h2>
                    <input type="numbr" id="stock" name="stock" value="${data.stock}" >
                 </div>
           
                 <h2>  Description</h2>
                  <textarea name="desc" id="des" cols="30" rows="10">${data.des}</textarea>
                </div>
             
         </div>
        <div class="edit_product_image">
            <input type="file" id="edited_image" style="display:none" name="productimage">
            <label for="edited_image">
            abc
            <img src="${data.img}" id="img_edit" alt="">
            </label>
            <div class="button_for_edit">
                <button id="cancel">
                    cancel
                </button>
                <button type="submit" >
                    Update
                </button>

            </div>
                                                
        </div>
    </form>
        
        `
  document.body.appendChild(div)
  document.getElementById("cancel").addEventListener("click", () => {
    div.rmove()
  })
  document.getElementById("edited_image").addEventListener("change", (this) => {
    console.log(this)
    document.getElementById("img_edit").setAttribute("src", "")
    ischanged = true
  })

  document.getElementById("editform").addEventListener("submit", async (event) => {
    event.preventDefault()
    const formdata = new FormData(event.target)
    alert("target")
    const updateobj = {
      id: data.id,
      name: document.getElementById("name").value,
      img: data.img,
      des: document.getElementById("des").value,
      newImage: data.img,
      price: document.getElementById("price").value,
      stock: document.getElementById("stock").value
    }
    if (ischanged == true) {
       console.log("changed")
     
      const addres = await fetch("/AddProductImage", {
        method:"POST",
        body:formdata
      })
      console.log("uploaded")
      const upddData = await addres.json()
      updateobj.newImage = upddData.filename
      const res = await fetch("/updateProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateobj)
      })
      const updata = await res.json()
       if(updata.status==true)
       location.reload()
    } else {

      console.log("not changed")
      const res = await fetch("/updateProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateobj)
      })
      const data = await res.json()
      console.log(data)
    }

  })
}
const addproduct = async () => {

  const div = document.createElement("div")
  div.className = "background"
  div.innerHTML = `   <form class="edit_panel" id="addForm" enctype="multipart/form-data" >
         <div class="product_edit_content">
            <h1> Your Product details</h1>
             <div class="product_Content">
                <h2> Product Name </h2>
                 <input type="text"  required id="name" >
                 <div class="num_content_fo_product">
                    <h2> Price</h2>
                    <input type="number" required id="price" name="prie" >
                    <h2> Stock</h2>
                    <input type="numbr" name="stock"   required id="stock">
                 </div>
          
                 <h2>  Description</h2>
                  <textarea name="desc" id="des" required cols="30" rows="10"></textarea>
                </div>
             
         </div>
        <div class="edit_product_image">
            <input name="productimage" type="file" onchange="changeImage(this)"  id="edited_image" requited style="display:none">
            <label for="edited_image">
            click
            <img src="" id="img_pr"  alt="">
            </label>
            <div class="button_for_edit">
                <button id="cancel">
                    cancel
                </button>
                <button type="submit" >
                    Add
                </button>

            </div>
                                                
        </div>
    </form>
        
        `
  document.body.appendChild(div)

  document.getElementById("addForm").addEventListener("submit", async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const productData = {}
    const res = await fetch("/addProductImage", { method: "POST", body: formData })
    const data = await res.json()
    productData.name = document.getElementById("name").value
    productData.des = document.getElementById("des").value
    productData.price = document.getElementById("price").value
    productData.stock = document.getElementById("stock").value
    productData.img = data.filename
    let fres = await fetch("/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    })
    const data2 = await fres.json()
    console.log(data2)
    if (data2.status == true) {
      location.reload()
    }
  })

  document.getElementById("cancel").addEventListener("click", () => {
    div.remove()
  })
}
const changeImage = (file) => {
  console.log(event.target.value)
  document.getElementById("img_pr").src = event.target.value
}

const deleteProduct = async (id) => {
  const res = await fetch(`/deleteProduct/${id}`)
  const data = await res.json()

  console.log(data.status)
  if (data.status == true) {
    document.getElementById(`card${id}`).remove()
  }
}






