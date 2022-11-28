import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess(),
	plugins: [sveltekit()]
};

export default config;
