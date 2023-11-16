const config = {
	name: 'trial',
	template: 'react-starter',
	target: 'git@github.com:Laufire/demo.git',
	theme: 'material',
	customizations: {
		components: {
			type: 'function',
		},
		services: {
			type: 'function',
		},
	},
	content: {
		panelData: {
			type: 'simple',
			data: "click",
		},
		panel: {
			type: 'button',
			data: 'panelData'
		},
		app: {
			type: 'box',
			props: {
				values: 'getFiles',
				width: 100,
			},
			content: 'context.state.app',
		},
	},
	dependencies: {
		"glob": "^8.0.1",
	},
};

module.exports = config;
