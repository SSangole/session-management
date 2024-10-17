import express from "express";
import router from "./src/routes/index.js";
import session from "./src/config/session.js";
import cors from "cors";

const app = express();

const whitelist = new Set(['http://localhost:3000', 'http://localhost:8080']);
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.has(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true // enable set cookie in the response headers for the client to store the session 
    //id, also use withCredentials: true in the client request headers
    // this will allow the cross origin cookie transaction between the client and the server
}

app.use(cors(corsOptions));
app.use(express.json()); // body parser
app.use(session); // session middleware
app.use(router); // routes

app.listen(8080, () => {
    console.log('Server is listening on port 4000');
});

