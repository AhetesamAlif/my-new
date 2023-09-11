
// 1.JSON => stringify(), parse()
const student = {
    name: 'Alif',
    id: 1001,
    movies: ['scam 1992', '3 idiots']
}
// conver JS object to JSON => stringify()
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// convert JSON to JS object => parse()

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2.fetch

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));

// 3.object keys, values

const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);


// add an object to a old array 

const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'car', price: 1568000, brand: 'lenovo', color: 'black' },
    { name: 'watch', price: 2000, brand: 'lenovo', color: 'space gray' },
    { name: 'keyboard', price: 3200, brand: 'lenovo', color: 'black and white' }
]

const newProduct = { name: 'mouse', price: 5600, brand: 'havic', color: 'neon' };
const newProducts = [...products, newProduct];
console.log(newProducts);

const remaining = products.filter(p => p.name !== 'car');
console.log(remaining);

const score = 50;
if (score) {
    console.log('true');
}
else {
    console.log('flase');
}

const money = 80;
if (money > 100) {
    console.log('biriyani');
}
else {
    console.log('cha biscuit');
}

// ternary

const food = money > 100 ? 'biriyani' : 'cha biscuit';
console.log(food);

// numbers to string

const myNum = 56;
console.log(myNum);
const numString = myNum + '';
console.log(numString);

// string to numbers

const myScore = "890";
const scoreStr = +myScore;
console.log(scoreStr);
