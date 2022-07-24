import Product from '../models/productModel.js'

export const getProductController = async (req,res)=>{
        try{
            const products = await Product.find()
            res.status(200).send(products);

        }
        catch(error){
            console.log(error)
        }
}