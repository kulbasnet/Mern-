const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt =require('jsonwebtoken');


const test = (req,res) =>{
    res.json('test is working');
}

//////Signup endpoint
const UserSignup = async(req,res) =>{
    try{
        const {name,email,password} = req.body;
        //check if name was entreerd

        if(!name){
            return res.json({
                error: 'name is required'
            })

        };
        //check is passowrd is good
        if(!password || password.length <6 ){
            return res.json({
                error : "passowrd is required and should be 6 charachter"
            })
        }


        //check email
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error : 'email is tkaen'
            })
        }

        const hashedPassword =await hashPassword(password)



        //Create usr in database

        const user = await User.create({
            name, 
            email ,
            password: hashedPassword,
        })

        return res.json(user)

        }catch (error){
            console.log(error)

        }

}


//Login Endpoint

const Userlogin = async (req,res)=>{
    try{
        const {email, password} = req.body;

      //  check if user Exist
      
      const user = await User.findOne({email});
      if(!user){
        return res.json({
            error: 'No User Found'
        })
      }


      //check if passwords match
      const match = await comparePassword(password,user.password)
      if(match){
        jwt.sign({email : user.email, 
                id : user._id,
               name: user.name
        }, process.env.JWT_SECRETS, {}, (err, token)=>{
            if(err) throw err;
            res.cookie('token', token).json(user)

        } )

      }

      if(!match){
        res.json({
            error: 'password Dont match'
        })
      }
    }catch(error){
        console.log(error)

    }
}


const getProfile =(req,res)=>{
    const token = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRETS,{}, (err,user)=>{
            if(err) throw err;
            res.json(user)
        })
    }else{
        res.json(null);
    }

}

module.exports={
    test, 
    UserSignup,
    Userlogin,
    getProfile
}
