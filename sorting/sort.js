
// const nums = [4, 1, 2, 3];
const fruits = ["banana", "apple", "mango", "kiwi"];



console.log("b".localeCompare("a"))

function sortComparator(str1, str2){
   return str2.localeCompare(str1);
}

fruits.sort(sortComparator);

console.log(fruits);