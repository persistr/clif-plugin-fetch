const fetch = require('node-fetch')
module.exports = {
  initialize: (toolbox) => {
    toolbox.fetch = fetch
  }
}
