# Vue-Upload-Wrapper

[![npm version](https://badge.fury.io/js/vue-upload-wrapper.svg)](https://www.npmjs.com/package/vue-upload-wrapper)

## Installation

```sh
npm install vue-upload-wrapper --save
```

## Usage

```vuejs
<vue-upload-wrapper :accept="['audio/mp3']" multiple @fileSelected="(files) => console.log(files)">
    <input type='button' />
</vue-upload-wrapper>
```