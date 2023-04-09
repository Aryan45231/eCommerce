
const nav = () => {
let userdata = JSON.parse(sessionStorage.getItem("userdata"))
if(userdata==null)
userdata={
  name :undefined,
  id:undefined,
  type:undefined,
  token:undefined
}
const {name , id ,type, token} =userdata
console.log(name)
const nav= document.createElement("div")
  if (name)
    nav.innerHTML = `
   <div class="user menus">
     <a href="/" > 
     GETWATCH
     </a>
    </div> 
    <div class="menus" id="menu">
          <a>
            ${name}
          </a>
          <a onclick="logout()">
            logout
          </a>
          <a href="/showcart/${id}">Cart</a>
    </div>
   `
  else {
    nav.innerHTML = `
     <div class="user">
     GETWATCH
   </div> 
   <div class="menus" id="menu"> 

         <a href="/signin">
           signin
         </a>
       
  
   </div>
  `

  }
  document.body.appendChild(nav)
  if(type=="admin"){
    const control =document.createElement("a")
    control.href=`/adminControl/${token}`
    control.innerHTML="Controls"
    document.getElementById("menu").appendChild(control)
  }


  nav.className="namevar"

}
nav()
const logout=()=>{
  sessionStorage.clear()
  location.href=`${location.origin}/logout`
}