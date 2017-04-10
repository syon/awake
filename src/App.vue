<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png">
    <input class="queryUrl" type="text" v-model:value="queryUrl" v-on:keyup.enter="fetchData">
    <div class="rawdoc" v-html="rawdoc"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      queryUrl: 'https://gist.githubusercontent.com/mojavelinux/4402636/raw/b8b02adc3c0ddb92df505ba3eb8e625952615b7a/test.asciidoc.txt',
      rawdoc: ''
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const docUrl = this.queryUrl
      fetch(`/api/doc/?url=${docUrl}`).then((res) => {
        if (res.ok) {
          return res.text()
        } else {
          throw err
        }
      }).then(raw => {
        console.info(raw)
        this.rawdoc = raw
      })
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 800px;
  margin: 0 auto;
  color: #2c3e50;
}

#logo {
  width: 100px;
  margin: 0 auto;
}

.queryUrl {
  display: block;
  width: 100%;
  padding: 4px;
  font-family: monospace;
  font-size: 14px;
}

.rawdoc {
  margin: 50px 0 100px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
