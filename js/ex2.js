const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const odds = array.filter(n => n % 2);
const div1 = array.filter(n => (n % 2 === 0 || n % 5 === 0));
const div2 = array.filter(n => (Math.sqrt(n % 3 === 0)));
const sum = array
    .filter(n => n % 5 === 0)
    .map(n => n*n)
    .reduce((num1, num2) => {
        return (num1+num2)
    });
        
console.log(odds);
console.log(div1);
console.log(div2);
console.log(sum);