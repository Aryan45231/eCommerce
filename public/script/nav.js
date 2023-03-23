const nav = () => {
  const nav = document.getElementById("navbar")
  const name = sessionStorage.getItem("name")
  const id=sessionStorage.getItem("id")
  if (name)
    nav.innerHTML = `
   <div class="user menus">
     <a href="/" > 
     GETWATCH
     </a>
    </div> 
    <div class="menus">
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
   <div class="menus">

         <a href="/signin">
           signin
         </a>
       
  
   </div>
  `

  }
}
nav()
const logout=()=>{
  sessionStorage.clear()
  location.href=`${location.origin}/logout`
}