var what_is_the_meaning_of_life = 42;


var students = ['Kevin', 'Eric', 'Josh', 'Cobi', 'Gus', 'Monty', 'Rigo', 'Leo', 'Alfredo', 'Matt', 'David', 'Haley', 'Marisa', 'Osvaldo', 'Rose', 'David L.', 'Micaela'];

var fruits = ['Apple', 'Lemons', 'Avocados', 'Kiwis', 'Mango'];
// console.log(fruits);

//  Push - adds to the end of an array
fruits.push('Pineapple');
// console.log(fruits);

// Pop - removes from the end of the array
var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// Unshift - adds to front of an array
fruits.unshift('Dragonfruit');
// console.log(fruits);

// Shift - removes from the front of an array
var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

// IndexOf - friends the index of an item in an array
var posFruit = fruits.indexOf('Avocados');
// console.log(posFruit);

// Splice - remove and item by index number
var remFruit = fruits.splice(0, 3);
//                           ^  ^
//                      index    number removed
// console.log(remFruit);
// console.log(fruits);

// Slice - copies an array
var copyFruit = fruits.slice(1, 3);
//                           ^  ^
//             starting index    up-to but not including
// console.log(fruits);
// console.log(copyFruit);
// console.log(fruits);

function randomStudent(){
    var numStudents = students.length;
    var randStudent = Math.ceil(Math.random() * numStudents) - 1;
    alert(students[randStudent]);
}
randomStudent();

var classes = ['History'];
console.log(classes);
classes.unshift('Math', 'English');
console.log(classes);
classes.push('PE', 'Geekwise');
console.log(classes);
var splicedCla = classes.splice(3, 1);
console.log(splicedCla);
console.log(classes);
// sort - machine alphabetization
classes.sort();
console.log(classes);
// reverse
classes.reverse();
console.log(classes);

var nums = [0, 53, 5, 103, 7, 78, 10];
// 0, 5, 7, 10, 53, 78, 103
nums.sort();
console.log(nums);
