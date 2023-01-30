import { sveltekit } from '@sveltejs/kit/vite';
import pkg from './package.json' assert { type: 'json' };

const config = {
	plugins: [sveltekit()],
	define: {
		__VERSION__: JSON.stringify(pkg.version)
	}
};

export default config;
