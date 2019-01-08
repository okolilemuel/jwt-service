import jwt from 'jsonwebtoken';
import config from '../config';

export default (request, validity = '1h') => {
  return new Promise((resolve, reject) => {
    jwt.sign(request.body, config.JWT_SECRET, {
      expiresIn: validity
    }, (err, token) => {
      if (err) return reject(err);
      resolve(token);
    });
  });
};