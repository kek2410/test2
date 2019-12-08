# vue.js sample source by jaein

## Vue.js dev environment

- vue.js@2.6.10
- vue-cli@4.0.5
- VScode

## default module installation

```
- node.js version-12.13.1
  download: https://nodejs.org/ko/
- yarn version-1.19.1
  install: npm install -g yarn
- Project setup
  yarn install

* Added library
  - vuex@3.0.1
  - vuex-class@0.3.2
  - vue-class-component@7.1.0
  - vue-cookies-ts@1.5.19
  - vue-i18n@8.15.0
  - vue-property-decorator@8.3.0
  - vue-router@3.1.3
  - vuetify@2.1.0
  - axios@0.19.0
  - ts-jest@24.2.0
  - cookie-ts@1.0.1
  - core-js@3.3.2
  - eslint-config-vue-typescript-eslint@1.0.3
  - eslint-config-vuetify@0.4.0
  - eslint-plugin-html@6.0.0
  - eslint-plugin-prettier@3.1.1
  - eslint-plugin-vuetify@1.0.0-beta.5
  - flush-promises@1.0.2
  - path-to-regexp@6.1.0
```

### VSCode Settings

```
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "javascript.format.enable": false,
    "typescript.format.enable": false,
    "eslint.validate": [
        {
            "language": "vue",
            "autoFix": true
        }, //vue 체크,
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
    ],
```

### Directory Infomation

```
- src/api
  : api 통신용 공통 함수를 제공.
- src/assets
  : 제공될 이미지등의 파일 관리.
- src/components
  : 공통 컴포넌트 관리
- src/layout
  : 레이아웃 관리
- src/locale
  : 언어 관리
- src/plugins
  : 플러그인 관리 Ex:vuetify 등
- src/router
  : 라우터 관리
- src/store
  : 스토어 관리
- src/utils
  : 공통적으로 활용될 함수들 관리(validate, undefined check 등)
- src/views
  : 페이지 관리
- src/views/components
  : 페이지별 사용되는 컴포넌트 관리
- */__tests__/*.spec.ts
  : 테스트 코드 관리 (각 컴포넌트, 페이지, 유틸등에 개별 폴더가 존재함.)

** 컴포넌트만 카멜케이스 사용하며 그 외에 폴더 및 파일의 이름은 -(대쉬) 를 사용하며 네이밍한다.
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test
```
