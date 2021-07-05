const fs = require('fs')
const express = require('express')
const {compile} = require('./lib')


compile({destinationDirectory:'dist', fileName:'zocom', verbose: false})

fs.watch('src', (...args) => {
  console.log("Recompiling")
  compile({destinationDirectory:'dist', fileName:'zocom', verbose: false})
})

express()
.use(express.static('dist'))
.listen(5000, () => console.log("Watching src and serving on 5000"))
