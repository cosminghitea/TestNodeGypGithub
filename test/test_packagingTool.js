'use strict'

var binary = require('node-pre-gyp');
var path = require('path')
var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));
var binding = require(binding_path);

const should = require('should');

describe('Test the C++ library', () => {
  it('The function should return hello', (next) => {
    should.deepEqual(binding.hello(), "hello");
    next();
  });
});