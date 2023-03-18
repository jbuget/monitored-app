import fastify from 'fastify';

// Require the framework and instantiate it
const server = fastify({ logger: true });

// Declare a route
server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

export default server;
