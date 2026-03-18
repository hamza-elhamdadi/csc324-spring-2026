
const nums = [4, 1, 2, 3];

function sortComparator(num1, num2){
    return num1 - num2;

}

nums.sort(sortComparator);

console.log(nums);