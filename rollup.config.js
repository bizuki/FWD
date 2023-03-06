import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/main.ts',
	output: {
		file: 'bundle.js',
		format: 'es'
	},
    plugins: [typescript(), terser()]
};
