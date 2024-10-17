import session from "express-session";
import redisStore from "./redis.js";
import envs from "./env.js";

const sessionMiddleware = session({
    store: redisStore,
    secret: envs.sessionSecretKey,
    saveUninitialized: false,
    resave: false,
    name: 'session_id', // name of the cookie
    rolling: true, // reset maxAge on every response, so the session will be extended on activity
    cookie: {
        secure: false, // if true, only transmit cookie over https, since we are using localhost, we set it to false
        httpOnly: true, // if true, prevent client side JS from reading the cookie
        maxAge: 1000 * 60 * 5, // session max age in miliseconds, session will expire after 5 minutes of inactivity
    }
});

export default sessionMiddleware;