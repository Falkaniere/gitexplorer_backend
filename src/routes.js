import { Router } from 'express';

import ReposController from './app/controllers/ReposController';

const routes = new Router();

routes.post('/repos', ReposController.store);

export default routes;
