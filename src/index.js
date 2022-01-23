
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
      return [];
    }
    matrix.forEach((element, index) => {
        if(index % 2 !== 0) element.reverse()
    });
    return [].concat(...matrix);    
}
