import 'reflect-metadata';
import { connect } from './config/typeorm';
import { startServer } from './app';

(async () => {
  connect();
  const app = await startServer();
  app.listen(3000, () => {
    console.log('Server listen on port: 3000');
  })
})();