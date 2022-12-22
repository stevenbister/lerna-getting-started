import fs from 'fs';
import dts from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: ["src/index.tsx",],
        output: [
            {
                dir: "dist",
                format: "cjs",
                assetFileNames: '[name][extname]',
            }
        ],
        plugins: [
            scss({
                name: 'test.css',
                output: function (styles, styleNodes) {
                    if (!fs.existsSync('./dist')){
                        fs.mkdirSync('./dist');
                    }

                    fs.writeFileSync('./dist/main.css', styles)
                },
                outputStyle: 'compressed'
            }),
            typescript(),
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
