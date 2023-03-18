import server from '../server.js';

// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
