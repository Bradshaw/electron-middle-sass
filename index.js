const middle = require('electron-middle')
const sass = require('node-sass')
const fs = require('fs')
const path = require('path')

middle.get((file, cb) => {
  let ext = path.extname(file);
  if (ext == '.css') {
    let scssfile = file.replace('.css', '.scss')
    let sassfile = file.replace('.css', '.sass')
    fs.access(scssfile, err => {
      if (err) {
        fs.access(sassfile, err => {
          if (err) {
            cb()
          } else {
            compileSass(sassfile, cb)
          }
        })
      } else {
        compileScss(scssfile, cb)
      }
    })
  } else {
    cb()
  }
})

function compileScss(scssfile, cb) {
  fs.readFile(scssfile, (err, data) => {
    if (err) {
      cb()
    } else {
      sass.render({
        data: data.toString()
      }, (err, result) => {
        if (err)
          cb()
        else
          cb(result.css)
      })
    }
  })
}

function compileSass(sassfile, cb) {
  fs.readFile(sassfile, (err, data) => {
    if (err) {
      cb()
    } else {
      sass.render({
        data: data.toString(),
        indentedSyntax: true
      }, (err, result) => {
        if (err)
          cb()
        else
          cb(result.css)
      })
    }
  })
}