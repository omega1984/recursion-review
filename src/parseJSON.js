// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //declare variable for current character
  let currentIndex = 0;
  let currentCharacter = json[currentIndex];
  //declare next character function
  let next = function() {
    currentIndex++;
    currentCharacter = json[currentIndex]
  }
  //parseArray function

  let parseArray = function() {
    let result = [];
    if (currentCharacter === ']') {
      return result;
    } else {
      while(currentCharacter !== ']') {
        result.push(parseElement());
      }
    }
    return result;
  }
  function parseElement() {
    if (currentCharacter = '"') {
      next();
      return parseString();
    }
  }

  //parseObject function
  let parseObj = function(){
    let result = {};
    if (currentCharacter === '}'){
      return result;
    }
  }

  if (currentCharacter === '{'){
    next();
    return parseObj();
  }
  //parseValue f
  function parseString() {
    let string = '';
    while (currentCharacter !== '"') {
      string += currentCharacter;
      next();
    }
    next();
    return string;
  }

  if (currentCharacter === '[') {
    next();
    return parseArray();
  }
};
