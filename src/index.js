import face from 'cool-ascii-faces'

let errorHandling = function () {
  return function * errorHandling (next) {
    try {
      yield next
    } catch (error) {
      this.status = error.status ? error.status : 500
      this.body = {
        error: {
          status: this.status,
          name: error.name,
          path: this.request.originalUrl,
          reaction: face()
        }
      }
    }
  }
}

export default errorHandling
