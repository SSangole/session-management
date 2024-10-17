
const sessionAuthentication = (req, res, next) => {
    if(req.session && req.session.user) {
        return next();
    }
    res.status(401).send('Unauthorized');
}

export default sessionAuthentication;