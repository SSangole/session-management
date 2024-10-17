First start the redis server with the help of docker.

Run following command in docker terminal or command prompt:
  docker pull redis
  docker run --name my-redis -d -p 6379:6379 redis

Test redis with following command:
  docker exec -it my-redis redis-cli
  PING
You should see PONG as a response

Now you can use session setup.
