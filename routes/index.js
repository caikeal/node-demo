import home from '../controllers/home.js';
import hello from '../controllers/hello.js';
import signin from '../controllers/signin.js';

const routes = function (router) {
	router.get('/', home);
	router.get('/hello/:name', hello);
	router.post('/signin', signin);
};

export default routes;
