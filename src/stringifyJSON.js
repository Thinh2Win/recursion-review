// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// input can be all data types
// numbers, boolean, null, arrays, objects, undefined, string, etc.
// output is a string
// strat:
// convert every value passed through the function to a string (unless array or object)
// if an array is passed
// have to stringify whats inside and then concat with brackets [ + inside + ]
// if an object is passed through
// stringify whats inside and then concat with curly braces and semicolon
// { + key + : + value + }
var stringifyJSON = function(obj) {
  // your code goes here
  // break case
  var answer = '';

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (!Array.isArray(obj) && typeof(obj) !== 'object') {
    return answer += obj;
  }

  if (Array.isArray(obj)) {
    var container = [];
    obj.forEach(function(element) {
      container.push(stringifyJSON(element));
    });
    return ('[' + container.join(',') + ']');
  }

  if (typeof(obj) === 'object') {
    for (var keys in obj) {
      var values = obj[keys];
      return '{' + stringifyJSON(keys) + ':' + stringifyJSON(values) + '}';
    }
  }
};
