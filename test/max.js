var maxBy = require('../');
var assert = require('assert');
describe('max-by', function () {
  it('should be working', function () {
    var n = maxBy([9,3,4], function (x) { return x % 3 });
    assert(4, n);
  });
});
