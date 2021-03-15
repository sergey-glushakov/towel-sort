
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(arguments.length === 0 || matrix.length === 0){
        return [];
    } else {
        let matrixRev = matrix.map((item, inx) => {
            if(inx%2 === 1){
                return item.reverse();
            }
            return item
        })
        return matrixRev.flat();
    }
}
