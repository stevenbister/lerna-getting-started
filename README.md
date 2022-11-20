# Lerna Getting Started Example

## Getting started

```bash
git clone https://github.com/stevenbister/lerna-getting-started.git
npm install
npm run:remix
```

### Somethings to note
Doesn't watch file changes in ui packages so if you make a change you will need to stop the remix server and restart it. This is so the packages can build.

This isn't a limitation with the setup so much as it's a POC so I've not added that functionality.


## Lerna info

This repo is a small example of using Lerna 5+.

Watch this [10-minute walkthrough](https://youtu.be/1oxFYphTS4Y) to see how new versions of Lerna work.

This repo contains three packages or projects:

- `header` (a library of React components)
- `footer` (a library of React components)
- `remixapp` (an app written using the Remix framework which depends on both `header` and `footer`)

```
packages/
    header/
        src/
            ...
        package.json
        rollup.config.json
        jest.config.js

    footer/
        src/
            ...
        package.json
        rollup.config.json
        jest.config.js

    remixapp/
        app/
            ...
        public/
        package.json
        remix.config.js

package.json
```
