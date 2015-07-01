# koa-face-errors
Errors with ASCII faces. Just because.

Based on [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces)

# Installation

`npm install --save koa-face-errors`

# Usage

Require in your middleware stack somewhere near the top, it'll catch your `Error` and slip some fun in the mix.

# Example

```js
var app = require('koa'),
    faceHandler = require('koa-face-errors'),
    port = process.env.PORT || 3000

app.use(faceHandler())

app.use(function *(){
  this.throw(500, 'whoops')
})

app.listen(port)
console.log('Listening on port', port)

```