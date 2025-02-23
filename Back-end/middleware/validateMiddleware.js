const validateUser = (req,res,next)=>{
    const {name , email, password} =req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: 'Please fill all required fields'})
    }
    //basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({message: 'Please enter a valid email'})
    }

    //password validation (minimum 6 characters)
    if (password.length <6){
        return res.status(400).json({message : ' Password must be at least 6 characters'})

    }
    console.log('Validation middleware: User data validated');
    next()
    
}
const validateProduct = (req,res,next )=>{
    const {name, price, description}  = req.body;
    if(!name || !price || !description){
        return res.status(400).json({ message: 'Please fill all required fields'})
    }
    if(price <= 0){
        return res.status(400).json({message: 'Price must be greater than 0'})
    }
    console.log('Validation middleware: Product data validated');
    next()
    
}
module.exports = {validateUser, validateProduct}