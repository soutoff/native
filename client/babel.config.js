module.exports = function (api) {
	api.cache(true)
	return {
		// presets: ['babel-preset-expo'],
		presets: [
			['babel-preset-expo', { jsxImportSource: 'nativewind' }],
			'nativewind/babel'
		],

		// plugins: ["nativewind/babel", "inline-dotenv"]
		// plugins: [
		// 	[
		// 		'babel-plugin-root-import',
		// 		{
		// 			rootPathSuffix: 'app/',
		// 			rootPathPrefix: '/@'
		// 		}
		// 	]
		// ]
		plugins: [['babel-plugin-root-import']]
	}
}
