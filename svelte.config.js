import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        target: '#svelte',
        adapter: staticAdapter(),

        router: false,
        prerender: {
            crawl: false,
            enabled: true,
            entries: [ '*' ],
        },
        hydrate: false,

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
