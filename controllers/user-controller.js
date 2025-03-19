const User = require('../models/user-model');

const createUser = async function (req,res) {
    try {
        const { username,age,email } = req.body;

        if (!username || !age || !email) {
            return res.status(401).json({message: "All fields are required"})
        }

        const newUser = new User({ username,age,email });
        await newUser.save();
        res.status(201).json({message: "User created successfully"})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}


const login = async function (req,res) {
    const {username,age,email} = req.body;

    const user = await User.findOne({ username})

    if (user) {
        res.json({message: "User found", data: {username,age,email}});
    }
    else {
        res.json({message: "User not found"})
    }


}

module.exports = {createUser,login}