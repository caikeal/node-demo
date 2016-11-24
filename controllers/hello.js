export default async (ctx, next) => {
	let name = ctx.params.name;
	ctx.state = {name, title: 'koa2 demo'};
	await ctx.render('hello');
};
