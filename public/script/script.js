// for sing in 
const userData={
    email:"",
    password:""
}
const signup_form=`<div class="sing_in_container sing_up" id="sign_up">
<h1 style="margin-bottom: 50px;">
   Sign-UP
</h1>
<form action="" id="signup_fomr"  >
<input type="email" required  name="email" onchange="collectSignUpData(this)" placeholder="Email">
<input type="text" required name="name" onchange="collectSignUpData(this)" placeholder="Name">

   <input type="password" required name="password" onchange="collectSignUpData(this)" placeholder="password">
   <input type="password" required name="c_password" id="" onchange="collectSignUpData(this)" placeholder="confirm password">
   <button style="margin-top: 30px;" > Sing-UP</button>
</form> 
<h4 onclick="change("sign_up)">
   Sign-IN
</h4>
</div>`
const  collectData=(data)=>{
  if(data.name=="email"){
     userData.email=data.value
  }else{
    userData.password=data.value
  }
  console.log(userData)
}

document.getElementById("signin_form").addEventListener("submit",async(event)=>{
  event.preventDefault()
  const url="/sign-in"
  const content={
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(userData)
   }
   const res= await fetch( url , content)
   const data= await res.json()
    if(data.status==true){
        sessionStorage.setItem("id",data.id)
        sessionStorage.setItem("token",data.token)
        sessionStorage.setItem("name",data.name)
        location.href=location.origin
    }else{
       alert(data.message)
    }
})

// for sing up
const sing_up_data={
   name:"",
   email:"",
   password:"",
   confirm_password:""
}
let Pconfirm=""
const collectSignUpData=(data)=>{
  if(data.name=="name")
   sing_up_data.name=data.value
   else if(data.name=="email")
   sing_up_data.email=data.value
   else if(data.name=="password")
   sing_up_data.password=data.value
   else if(data.name=="c_password")
   Pconfirm=data.value
   
}
const SendOTP= async(email)=>{
     const res=await fetch(`/email/${email}/otp`)
     const data=await res.json()
     if(data.status==true){
      document.getElementById("sign_up").innerHTML=`
      <h1> Verify OTP </h1>
     <form  id="otp_form"> 
     <input id="otp" type="number " max="4' placeholder="otp" >
     <button> verify </button>  
     </form >
     `
      document.getElementById("otp_form").addEventListener("submit",async(event)=>{
        event.preventDefault()
       
        const otp=document.getElementById("otp").value
        console.log(otp)
        const res2=await fetch(`/verifyOtp/${otp}`)
        const data2=await res2.json()
        if(data2.status==true){
          console.log("verifid")
          const url="/sing_up"
          const content={
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body:JSON.stringify(sing_up_data)
          }
        const lastres=  await fetch(url, content)
        const lastData= await lastres.json()
        if(lastData.status==true)
           location.reload()
        }else{
           alert("wrong otp please try again")
        }
      })
        
     }else{
       alert(data.message)
     }

}

document.getElementById("signup_fomr").addEventListener("submit",async(event)=>{
  event.preventDefault()
  if(sing_up_data.password.length<6){
   alert("password length must be more than 6 charecter")
  }else if(sing_up_data.password!= Pconfirm)
   alert("password and confirm password not mathed")
 else{
      console.log(sing_up_data)
    SendOTP(sing_up_data.email)
  
        
       } 
} 
)
const change=(id)=>{
  if(id==`sign_in`){
    document.getElementById("sign_up").style.display="flex"
  }else{
    document.getElementById("sign_in").style.display="flex"
  }
  document.getElementById(id).style.display="none"
}
