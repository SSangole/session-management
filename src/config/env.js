import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const envs = {
    sessionSecretKey: process.env.SESSION_SECRET_KEY
};

export default envs;