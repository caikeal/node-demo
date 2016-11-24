export default async (ctx, next) => {
	ctx.state = {title: 'koa2 demo'};
	await ctx.render('home');
};
