var _ = require('underscore');
// The require function goes through 3 steps when using require:
// is it a Core Module?
// if not, is it a File or Folder?
// Still no? Ok, check the node_modules folder

var result = _.contains([1, 2, 3], 2);
console.log(result);