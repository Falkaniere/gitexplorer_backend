import { Router } from 'express';

import ReposController from './app/controllers/ReposController';

const routes = new Router();

routes.post('/repos', ReposController.store);
routes.get('/repos', ReposController.index);

export default routes;
