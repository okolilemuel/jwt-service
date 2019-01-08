import http from './app';

const PORT = process.env.PORT || 5000;

http.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);