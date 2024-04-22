const { randomBytes } = require('node:crypto');

module.exports = {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false
				}
			}
		},
		{
			name: 'prefixIds',
			params: {
				prefix: () => randomBytes(20).toString('hex').slice(0, 4)
			}
		}
	]
};
