// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) return "null";
  if (Array.isArray(obj)){
    var result = [];
    for (var i = 0; i < obj.length; i++){
      result.push(stringifyJSON(obj[i]));
    }
    return "[" + result.join(",") + "]";
  }
  if (typeof obj === "object"){
    var result = [];
    for (var key in obj){
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return "{" + result.join(",") + "}";
  }
  if (typeof obj === "number" || typeof obj === "boolean"){
    return "" + obj;
  }
  return '"' + obj + '"';
};
