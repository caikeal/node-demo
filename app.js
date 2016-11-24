import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import routes from './routes/index.js';
import views from 'koa-views';
import Logger from 'koa-logger';
import KoaJson from 'koa-json';
import KoaStatic from 'koa-static';
import path from 'path';

const app = new Koa();
const router = new Router();
const serve = new KoaStatic(path.join(__dirname, '/public'), {maxage: 31536000000});

app.use(BodyParser());    // first in for getting query body
app.use(KoaJson());    // beauty response json
app.use(Logger());    // log request URL

// read static files
app.use(serve);

// add template before route
app.use(views(path.join(__dirname, '/views'), {
	extension: 'ejs'
}));

// add url-route:
routes(router);

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
