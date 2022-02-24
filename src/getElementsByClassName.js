// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// input is a class name
// output: array with all divs that contain class name
// what we know: navigating through the document body
// multiple nested divs within other divs
// how do we iterate through document body?
// how do we check if an element has nested elements?
//
var getElementsByClassName = function(className) {
  // create result array
  var result = [];
  // find a way to check if element contains className
  // push that element into array
  if (document.body.className === className) {
    result.push(document.body);
  }
  // check if current element has nested elements
  // create helper function
  // if there are nested elements, then
  // check if nested elements contain class name and push to result array if true
  // use helper function to check if
  // nested elements have nested elements and repeat until no more nested elements
  var checkNested = function(nestedElement) {

    if (nestedElement.childNodes.length > 0) {
      var children = nestedElement.childNodes;

      children.forEach(function(elements) {
        if (elements.classList !== undefined) {

          if (elements.classList.contains(className)) {
            result.push(elements);
          }
        }
        checkNested(elements);
      });
    }
  };
  checkNested(document.body);
  // break point would be once there are no more nested elements
  // return result array
  return result;
};

