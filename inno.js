var dirname = require('path').dirname

function group (files) { // assuming: [{a:1,path:'...'},...]
  return files
    .map(function (file) {
      return Object.assign(file, { dir: dirname(file.path) })
    })
    .reduce(function (acc, cur) {
      if (!acc.hasOwnProperty(cur.dir)) acc[cur.dir] = [ cur ]
      else acc[cur.dir].push(cur)
      return acc
    }, {})
}