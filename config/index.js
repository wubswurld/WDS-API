if (process.env.NODE_ENV == 'production') {
    module.exports = require('./index.js')
} else {
    module.exports = require('./dev.js')
}
