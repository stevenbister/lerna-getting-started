import fs from 'fs';
import scss from 'rollup-plugin-scss';

export default {
    input: ["src/index.ts",],
    output: [
        {
            dir: "dist",
            format: "cjs",
            assetFileNames: '[name][extname]',
        }
    ],
    plugins: [
        scss({
            name: 'main.css',
            output: function (styles, styleNodes) {
                if (!fs.existsSync('./dist')){
                    fs.mkdirSync('./dist');
                }

                fs.writeFileSync('./dist/main.css', styles)
            },
            outputStyle: 'compressed'
        }),
    ],
    external: ["react"]
};
