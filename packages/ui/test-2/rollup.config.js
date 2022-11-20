import fs from 'fs';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';

export default {
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
};
