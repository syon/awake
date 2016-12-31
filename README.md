AWAKE [![wercker status](https://app.wercker.com/status/219b82bc57e438e29fe947f92a275fcc/s/master "wercker status")](https://app.wercker.com/project/byKey/219b82bc57e438e29fe947f92a275fcc)
=====

syon's static site boilerplate.

| branch  | with    | url    |
|---------|---------|--------|
| master  | (blank) | https://github.com/syon/awake |
| webpack | Webpack | https://github.com/syon/awake/tree/webpack |
| harp    | Harp    | https://github.com/syon/awake/tree/harp |


## install

```bash
$ npm install
```


## prepare

add your static resources into `public` directory.


## deploy

### GitHub Pages
wercker (wercker.yml)

### Heroku

```bash
$ git add -A
$ git commit -am "commit message"
$ heroku create your-site-name
$ git push -u heroku master
```

#### Basic Auth

Edit `Procfile` and add config on Heroku.

```bash
web: serve public --auth
```

```bash
$ heroku config:set SERVE_USER username
$ heroku config:set SERVE_PASSWORD password
```
