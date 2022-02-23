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
  console.log(className);
  console.log(document.body);
  // create result array
  var result = [];
  // find a way to check if element contains className
  // push that element into array
  if (document.body.className === className) {
    result.push(document.body);
  }
  // check if current element has nested elements
  // if there are nested elements, iterate through recursively
  var checkNested = function(nestedElement) {
    if (nestedElement.childNodes.length > 0) {
      var children = nestedElement.childNodes;
      children.forEach(function(elements) {
        if (elements.className === className) {
          // problem
          // if an element has more than 1 class name, this if statement will turn up false and the div with 2 class names will not get pushed
          // element.classList gives us all the classes but we cant say element.classList.contain(classname) or use .includes
          // how do we say if the classList contains our className do "something"
          result.push(elements);
        }
        checkNested(elements);
      });
    }
  };
  checkNested(document.body);
  // break point would be once there are no more nested elements
  // return result array
  console.log(result);
  return result;
};

