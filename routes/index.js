import obtainController from '../controllers/obtainToken';
import verifyController from '../controllers/verifyToken';
import {
  Router
} from 'express';
const routes = Router();

routes.post('/verify', (request, response, next) => {
  verifyController(request.body.token).then(user => {
    response.send(user);
  }).catch(error => {
    next(error);
  });
});

routes.post('/obtain', (request, response, next) => {
  obtainController({
    body: request.body
  }).then(user => {
    response.send(user);
  }).catch(error => {
    next(error);
  });
});

export default routes;