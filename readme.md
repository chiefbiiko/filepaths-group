# filepaths-group

[![build status](http://img.shields.io/travis/chiefbiiko/filepaths-group.svg?style=flat)](http://travis-ci.org/chiefbiiko/filepaths-group) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/filepaths-group?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/filepaths-group)

***

Collapse an array of file objects into a grouped array (entire dirs/single files).
Best to use in conjunction with [drag-drop](https://github.com/feross/drag-drop).

***

## Get it!

```
npm install --save filepaths-group
```

***

## Usage

Note that every object in the file array needs to have a `.path` property. If you want to get accumulated dir/file sizes back the input objects also need to have a numeric `.size` property.

``` js
var group = require('filepaths-group')

var files = [ { path: 'C:/COPYING'}, { path: 'C:/fraud.pem' } ]

group(files, function (err, grouped) {
  if (err) return console.error(err)
  console.log(grouped)
})
```

Grouped file objects have a `.type` property which either indicates a single file or an entire directory.

***

## API

### `group(files[, opts], callback)`

Collapse the input file object array into a labelled array of entire directories and single files. Calls back with `callback(err, data)`. Options default to:

``` js
{
  size: false // indicate total sizes of files and directories
}
```

***

## License

[MIT](./license.md)
