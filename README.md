# pokemon-portfolio

## Initialize.
- Nuxtプロジェクト作成.
```js
yarn create nuxt-app <project-name>
```

-その他必要なモジュールをインストール.
```js
yarn add @nuxtjs/axios
yarn add @nuxtjs/proxy
```

- nuxt.config.jsにモジュール読み込みの追記.
```js
export default {
  mode: 'universal',
  srcDir: 'app',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/css/common.css'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  //axios: {
    // 自分のfirebaseアカウントを設定
    //baseURL: 'http://localhost:8888'
  //},

  proxy: {
    '/api/': { target: 'http://localhost:8888', pathRewrite: {'^/': ''} }
  },
  build: {
    extend(config, ctx) {
    }
  }
}
```

## Test.
- jestインストール.
```js
yarn add -D jest
yarn add -D @vue/test-utils lodash.clonedeep
yarn add -D babel-jest 'babel-core@^7.0.0-0'
yarn add -D @babel/preset-env
yarn add @babel/polyfill --save-dev
yarn add core-js@3
```

- package.jsonに追記.
```js
"scripts": {
  "test": "jest"
},
```