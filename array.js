const arr = [47, 78, 25]
console.log(arr);
const [x, y, z] = arr;
console.log(x);


function makeArray(num1, num2, num3) {

    const nums = [num1, num2, num3];
    return nums;
}

// const getArray = makeArray(5,6,7);


const [a, b, c] = makeArray(5, 6, 7)
console.log(a, b, c);




// Object Destrutturing

const { name, salary } = { name: "Alif", id: 1531, salary: 2000, designation: 'IT Executive' };
console.log(name, salary);


const person = {
    name: 'Alif'
    
}
