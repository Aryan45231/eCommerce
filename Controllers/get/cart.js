const readUser = require("../../db/getUserData")
const readProduct = require("../../db/getProductData")
const write = require("../../db/writeUserCart")
module.exports = (req, res) => {
    try {
        if (req.session.flag == false)
            res.json({ status: "notOK" })
        else {
            const id = req.session._id
            const task = req.params.task
        
            {
                readProduct(req.params._id, (product) => {
                    readUser(id, (user) => {
                        let exist_product = undefined;
                        const user_cart_obj = {
                            name: product.name,
                            id: product.id,
                            img: product.img,
                            price: product.price,
                            quantity: 1
                        }
    
                        if (user.cart!= null){
                            user.cart=JSON.parse(user.cart)
                            exist_product = user.cart.find(ele => ele.id == product.id)
                        }
                        if (exist_product != undefined) {
                            const index = user.cart.indexOf(exist_product)
                            if (task == "add") {
                              
                                if (exist_product.quantity < product.stock) {
                                    exist_product.quantity = exist_product.quantity + 1;
                                    user.cart.splice(index, 1, exist_product)
                                    write(user)
                                    res.json({
                                        status: true,
                                    })
                                } else {
                                    res.json({
                                        status: false,
                                        message: "Out Of Stock"
                                    })
                                }
                            } else if (task == "sub") {
                                if (exist_product.quantity == 1) {
                                    user.cart.splice(index, 1)
                                    write(user)
                                    res.json({
                                        status: false,
                                        message: "empty"
                                    })
                                } else {
                                    exist_product.quantity--;
                                    user.cart.splice(index, 1, exist_product)
                                    write(user)
                                    res.json({
                                        status: true
                                    })
                                }
                            }
                        }
                        else {
                           if(user.cart==null)
                             user.cart=[]
                            user.cart.push(user_cart_obj)
                            
                            JSON.stringify(user.cart)
                            write(user)
                            res.json({
                                status: true,
                            })

                        }
                    })
                })
            }
        }
    } catch (err) {
        console.log(err)
    }
}