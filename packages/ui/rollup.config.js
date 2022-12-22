import autoprefixer from 'autoprefixer';
import fs from 'fs';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';

export default [
    {
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
            postcss({
                plugins: [
                    autoprefixer
                ]
            })
        ],
        external: ["react"]
    }
];
