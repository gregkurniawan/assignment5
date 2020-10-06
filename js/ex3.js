const studentList = [
    {
        firstName : "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName :"Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];


const name = student => student.lastName.startsWith("C");

const minimum = array => array.reduce((a, b) => Math.min(a, b));

const maximum = array => array.reduce((a, b) => Math.max(a, b));

const average = array =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

const cLastNameResults = 
    studentList.filter(name).map(student => {
        return {
            firstName: student.firstName,
            lastName: student.lastName,
            avgScore: average(student.scores),
            minScore: minimum(student.scores),
            maxScore: maximum(student.scores)
    };
})

console.log(cLastNameResults);