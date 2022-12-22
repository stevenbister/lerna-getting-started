import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';

export default [{
    input: ["src/index.tsx"],
    output: [
        {
            dir: "dist",
            entryFileNames: "[name].js",
            format: "cjs",
            exports: "named"
        }
    ],
    plugins: [
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
}];
