require("../../.env")
const aws=require("aws-sdk")
const readUser=require("../../services/db/mysql/users/getUserData")
env.config()
const awsConfig={
    accessKeyId:process.enaccess_keyv,
    secretAccessKey:process.env.aws_password,
    region:"ap-south-1"
}

const ses= new aws.SES(awsConfig)
const sendEmail=async(reciver_email, message)=>{
   console.log(reciver_email)
  const  email= "aryan78231@gmail.com"
  try{
 

    // prepare email to send
    const params={
        Source:email, 
        Destination:{
            ToAddresses:[reciver_email]
        },
        Message:{
            Subject:{
                Charset:"UTF-8",
                Data:"hello i am sending mail"
            },
            Body:{
                Html:{
                    
                  Charset:"UTF-8",
                        Data:`<h3> ${message} </h3>`
                    
                }
            }
        }
        
    }
  const sendMail=  await ses.sendEmail(params).promise()
    
  } 
  catch(e){
    console.log(e)
  }
}

module.exports=async (req,res)=>{
  console.log( "the email entered  is ", req.params._email)
  readUser(req.params._email,(data)=>{
    if(req.params.task=="otp"){
      const otp=Math.floor(1000+Math.random()*9000)
   if(data==undefined){
    const message=` the verification code for your email is ${otp}`
    sendEmail(req.params._email,message)
    req.session.otp=otp
     res.json({
       status:true
     })
   }else{
    res.json({
      status:false,
      message:"email already exist"
    })
   }
    }
    else if(req.params.task=="forget"){
      if(data!=undefined){
        req.session.ChangePassword=true
        const url=`localhost:2000/changePassword/${mailExixt.email}/${mailExixt.id}`
        const message=`
        please click the link billow to reset your password <br>
         <a href="${url}"> Reset Password </a>
        `
        console.log(message)
        sendEmail(req.params._email ,message)
        res.redirect("/signin")
      }else{
        res.json({
          status:false,
          message:"invalid email "
        })
      }
    }
  })
 
}