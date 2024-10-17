import RedisStore from "connect-redis";
import {createClient} from "redis";

// first start the redis server with docker
// Initialize client.
let redisClient = createClient({
    host: "localhost",
    port: 6379, // run redis server on docker with this port
})
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
})

export default redisStore;