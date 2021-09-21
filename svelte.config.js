import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        target: '#svelte',
        adapter: staticAdapter(),

        prerender: {
            enabled: true,
            entries: [ '*' ],
        },

        vite: {
            css: {
                postcss: {
                    plugins: [
                        autoprefixer({ overrideBrowserslist: [ "> .2%", "not IE 11" ] }),
                    ],
                },
            }
        },
    }
};

export default config;
