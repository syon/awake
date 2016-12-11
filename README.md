AWAKE [![wercker status](https://app.wercker.com/status/219b82bc57e438e29fe947f92a275fcc/s/master "wercker status")](https://app.wercker.com/project/byKey/219b82bc57e438e29fe947f92a275fcc)
=====

syon's front-end boilerplate.

- webpack
  - `webpack-dev-server`
    `source-map`
    `html-webpack-plugin`
- Babel
  - `ES2015`
- PostCSS
  - `Autoprefixer`
    `PreCSS`
- Style
  - `Bootstrap`
    `jQuery`
    `Google Fonts`
    `FontAwesome`
- Template
  - `Pug (Jade)`


## start dev

```bash
$ npm start
```


## build

```bash
$ npm run build
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
