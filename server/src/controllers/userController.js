import * as uploadService from "../services/uploadService.js"
import * as encrypt from "../utils/encryption.js";
import * as dbService from "../services/dbService.js"
export const userLogin = async (req,res) => {
    const userLoginDetails = req.body;
    const user = await dbService.getUser(userLoginDetails.email)
    if(user) {
        console.log("user found: ",user)
        const passwordCheck = await encrypt.comparePassword(userLoginDetails.password, user.user_password)
        if (passwordCheck) {
            console.log(passwordCheck)
            res.status(200).json({message: "user successfully logged in"})
            console.log("user logged in successfully")
        } else {
            res.status(401).json({message: "Incorrect password"})
            console.log("incorrect password")
        }
    } else {
        console.log("user not found")
        res.status(404).json({message: "User not found"})
    }
}
export const userSignUp = async (req, res) => {
    const userSignUpDetails = req.body;
    console.log(userSignUpDetails)
    const hashedPassword = await encrypt.createHash(userSignUpDetails.password)
    console.log(hashedPassword)
    const user = await dbService.createUser(userSignUpDetails.username, userSignUpDetails.email, hashedPassword)
    if(user) {
        res.status(200).json({message: "user successfully registered & logged in"})
        console.log("registered successfully")
    } else {
        res.status(400).json({message: "user not registered"})
        console.log("not registered")
    }
}