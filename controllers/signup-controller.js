const NewUser = require('../models/signup-model');

createUser = async (req, res) => {
    const body = await req.body;
    try {
        if(!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide your information'
            });
        };
        const user = new NewUser(body);

        if(!user) {
            return res.status(400).json({ success: false, error: err});
        }

        user.save().then(() => {
            return res.status(200).json({
                success: true,
                firstName: user.firstName,
                lastName: user.lastName,
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

