export default async (ctx, next) => {
	let name = ctx.request.body.name || '';
	let	password = ctx.request.body.password || '';
	console.log(`signin with name: ${name}, password: ${password}`);
	if (name === 'koa' && password === '12345') {
		ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
	} else {
		ctx.response.body = `<h1>Login failed!</h1>
		<p><a href="/">Try again</a></p>`;
	}
};
