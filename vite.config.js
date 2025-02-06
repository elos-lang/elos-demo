import { defineConfig } from 'vite';
import elos from 'vite-plugin-elos';

export default defineConfig({
	plugins: [
		elos()
	]
});