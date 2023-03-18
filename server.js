import fastify from 'fastify';

// Require the framework and instantiate it
const server = fastify({ logger: true });

// Declare a route
server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

server.get('/cpu', async (request, reply) => {
  const items = [...Array(100000).keys()];
  const nbLoops = 10000;
  const result = items.map((item, index) => {
    for (let step = 0; step < nbLoops; step++) {
      // DO SOMETHING…
    }
    const value = Math.floor(Math.random() * nbLoops);
    return { index, value };
  });
  return result;
})

export default server;
