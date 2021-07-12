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
        user.password = await bcrypt.hash(user.password, salt);

        user.save().then(() => {
            return res.status(200).json({
                success: true,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                id: user._id
            })
        })
    } catch (err) {
        return res.status(400).json({
            err, 
            message: 'Error creating user'
        })
    }
}

module.exports = {createUser}

