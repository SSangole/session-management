import { Router } from "express";
import sessionAuthentication from "../middlewares/sessionAuthentication.js";

const router = Router();

router.route('/login').post( (req,res) => {
    console.log('app.post ~ req.body->', req.body);

    const {email, password} = req.body;
    // check if the user exists in the database

    // if user exists
    req.session.user = {
        name: 'John Jihnson',
        age: 30,
        email: 'john@gmail.com'
    };

    res.send('Logged in');
});

router.route('/profile').get(sessionAuthentication, (req, res) => {
    res.send({msg: 'Profile page', session: req.session});
})

export default router;