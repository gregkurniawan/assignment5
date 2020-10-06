class Square {
    constructor(squareNum, side) {
        this.side = side
        this.squareNum = squareNum
        this.perimeter = side * 4;
        this.area = Math.pow(side,2);
        this.diagonal = Math.sqrt(2) * Math.pow(side,2);
    }

    describe() {
        return `${this.squareNum} with sides equal to ${this.side} has 
        a perimeter of ${this.perimeter}, an area of ${this.area}, and 
        a diagonal of ${this.diagonal}.`;
    }
}

const square1 = new Square("Square 1", 2);
const square2 = new Square("Square 2", 3);
const square3 = new Square("Square 3", 4);

console.log(square1.describe());
console.log(square2.describe());
console.log(square2.describe());
