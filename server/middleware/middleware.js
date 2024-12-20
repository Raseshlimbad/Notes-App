import jwt, { decode } from 'jsonwebtoken'
import User from '../models/User.js'

const middleware = async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token){
            return res.status(401).json({success: false, message:"Unauthorized"});
        }

        const decoded = jwt.verity(token, "raseshnoteapp")

        if(!decoded){
            return res.status(401).json({success: false, message:"Wrong token"});
        }

        const user = await User.findById({_id: decoded.id})

        if(!user){
            return res.status(404).json({success: false, message:"No user"});
        }

        const newUser = {name: user.name}
        req.user = newUser
        
        next()
    } catch (error) {
        return res.status(500).json({success: false, message:"please login"});
    }
}

export default middleware;