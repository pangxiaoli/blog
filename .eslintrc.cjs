/* eslint-disable no-undef */
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-extra-parens': [
			'error',
			'all'
		],
		'eqeqeq': [
			'error',
			'always'
		],
		'no-else-return': [
			'error',
			{
				'allowElseIf': false
			}
		],
		'no-eval': [
			'error'
		],
		'no-var': [
			'error'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				'allowSingleLine': false
			}
		],
		'no-plusplus': [
			'error'
		],
		'no-unused-vars': [
			'error'
		]
	}
};
