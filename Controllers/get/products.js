const readProduct=require("../../services/db/mysql/products/getProductData")
module.exports=(req,res)=>{
    readProduct("file",(data)=>{
        const counter=JSON.parse(req.params.counter)
        console.log(counter)
        const res_array=[]
        for(i=counter;i<data.length && i< counter+5;i++){
            res_array.push(data[i])
        }
        console.log(res_array.length)
       
        res.json({
            p_array:res_array,
            len:data.length
        })
    })
}