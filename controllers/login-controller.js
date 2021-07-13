const User = require('../models/login-model');

const validateUser = async (req, res) => {
    try {
        const body = req.body;
        console.log(body.json())
        const user = await User.findOne({ email: body.email });
        console.log(user, "user", body, "body")

        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(body.password, user.password);

            if (validPassword) {
                res.status(200).json({ message: "Valid password" });
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            res.status(401).json({ error: "User does not exist" });
        }

    } catch(err) {
        res.status(400).json({ error: "User does not exist" });
    }
}


module.exports = { validateUser }
