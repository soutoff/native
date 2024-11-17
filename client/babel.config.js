module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
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
