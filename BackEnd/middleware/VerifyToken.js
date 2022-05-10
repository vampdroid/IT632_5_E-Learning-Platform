const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

module.exports = (req,res,next)=>{

    // console.log(req.headers.authorization)
    const header = req.headers.authorization.split(' ')[1];
    jwt.verify(header,process.env.SECRET,(error,result)=>{

        if(error){
            res.setHeader("content-type",'application/json');
            res.status(400).send(error);
            return;
        }
        if(!result){
            res.setHeader("content-type",'application/json');
            res.status(400).send({error:"User not founds"});
            return;
        }
        User.findOne({email:result.user.email})
            .then(user=>{
                if(!user){
                    res.setHeader("content-type",'application/json');
                    res.status(400).send({error:"User not found"});
                    return;
                }
                req.user = user;
                next()
            })
            .catch(err=>next(err))
    })
}