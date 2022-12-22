import fs from 'fs';
import dts from 'rollup-plugin-dts';
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
        ],
        external: ["react"]
    },
    {
        // path to your declaration files root
        input: 'src/index.tsx',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        external: [/\.scss$/, /\.css$/],
        plugins: [dts()],
    },
];
