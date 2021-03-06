module.exports = {
	root: true,
	'env': {
        'node': true
    },
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
	'html'
	],
	// add your custom rules here
	'rules': {
		//分号结尾
		'semi': ["error", "always"],
		//换行tab
		'indent': ["error", "tab"],
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  	}
};
