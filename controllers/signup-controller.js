const NewUser = require('../models/signup-model');
const bcrypt = require("bcrypt");

createUser = async (req, res) => {
    const body = await req.body;
    try {
        if(!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide your information'
            });
        };
        const newUser = new NewUser(body);        

        if(!newUser) {
            return res.status(400).json({ success: false, error: err});
        }

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        newUser.save().then(() => {
            return res.status(200).json({
                success: true,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                id: newUser._id
            })
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            err, 
            message: 'Error creating user'
        })
    }
}

module.exports = {createUser}

