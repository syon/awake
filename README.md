AWAKE [![wercker status](https://app.wercker.com/status/219b82bc57e438e29fe947f92a275fcc/s/master "wercker status")](https://app.wercker.com/project/byKey/219b82bc57e438e29fe947f92a275fcc)
=====

syon's front-end boilerplate.

| branch  | with    | url    |
|---------|---------|--------|
| master  | (blank) | https://github.com/syon/awake |
| webpack | Webpack | https://github.com/syon/awake/tree/webpack |
| harp    | Harp    | https://github.com/syon/awake/tree/harp |


## dependencies

- webpack
  - `browser-sync`
    `source-map`
- Babel
  - `ES2015`
  - `React`
- PostCSS
  - `Autoprefixer`
    `PreCSS`


## start dev

```bash
$ yarn start
```


## build

```bash
$ yarn run build
```


## deploy

#### GitHub Pages
wercker (wercker.yml)

#### Heroku

For using `$ webpack` command on postinstall:

- https://devcenter.heroku.com/articles/nodejs-support#devdependencies

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```
