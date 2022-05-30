# javascript

### Semicolons

```javascript
const a = 1; // <-- semicolon here

function f() {
    console.log('this is f'); // <-- semicolon here
} // <-- but not here

const f = () => {
    console.log('this is f');
}; //<-- this is a assignment, so a semicolon is used
```

### Trailing Commas

```javascript
const myArray = [
    1,
    3,
    5,
];

const myObject = {
    name: 'susan',
    age: 20,
};
```

### Imports and Exports

```javascript
export default function myCoolFunction() {
    console.log('this is cool!');
}
```

```javascript
import myCoolFunction from './cool';
```

```javascript
import myReallyCoolFunction from './cool';
```

```javascript
import javascript from 'javascript';
```

```javascript
export const PI = 3.14;
export const SQRT2 = 1.41;

export default function myCoolFunction() {
    console.log('this is cool!');
}
```

```javascript
import { SQRT2 } from './cool'; // none default export using{}
```

```javascript
import { SQRT2, PI } from './cool';
```

```javascript
import myCoolFunction, { SQRT2, PI } from './cool';
```

### Variables and Constants

```javascript
let a;
```

```javascript
let a = 1;
```

```javascript
const c = 3;

console.log(c); // 3
c = 4; // error
```

```javascript
const d = [1, 2, 3];

d.push(4); // allowed
console.log(d) // [1, 2, 3, 4]
```

### Equal and Inequality Comparisons

```javascript
let a = 1;

console.log(a === 1); // true
console.log(a === '1') // false
console.log(a !== '1') // true
```

### String Interpolation

```javascript
const name = 'susan';
let greeting = `Hello, ${name}!`; // "Hello susan!"
```

### For-Of Loops

```javascript
const allTheNames = ['susan', 'john', 'alice'];
for (name of allTheNames) {
    console.log(name);
}
```

### Arrow Functions

```javascript
function mult(x, y) {
    const result = x * Y;
    return result;
}

mult(2, 3); // 6
```

```javascript
const mult = (x, y) => {
    const result = x * 	y;
    return result;
};

mult(2, 3); // 6
```

```javascript
const mult = (x, y) => x * y;
```

```javascript
const square = x => x * x;
```

```javascript
square(2); // 4
```

```javascript
longTask(function (result) { console.log(result) });
longTask(result => console.log(result));
```

### Promises

```javascript
fetch('https://example.com').then(r => console.log(r.status));
```

```javascript
fetch('https://example.com/data.json')
	.then(r => r.json())
	.then(data => console.log(data));
```

```javascript
fetch('https://example.com/data.json')
	.then(r => r.json())
	.then(data => console.log(data))
	.catch(error => console.log(`Error: ${error}`));
```

### Async and Await

```javascript
fetch('https://example.com/data.json')
	.then(r => r.json())
	.then(data => console.log(data));
```

```javascript
async function f() {
    const r = await fetch('https://example.com/data.json');
    const data = await r.json();
    console.log(data);
}
```

```javascript
async function f() {
    try {
        const r = await fetch('https://example.com/data.json');
        const data = await r.json();
        console.log(data);
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
}
```

```javascript
f().then(() => console.log('done!'));
```

```javascript
async function g() {
    await f();
    console.log('done!');
}
```

```javascript
const g = async () => {
    await f();
    console.log('done!');
};
```

### Spread Operator

```javascript
const a = [5, 3, 9, 2, 7];
console.log(Math.min(...a)); // 2
```

```javascript
const a = [5, 3. 9, 2, 7];
const b = [10, ...a, 8, 0]; // [10, 5, 3. 9, 2, 7, 8, 0]
```

```javascript
const c = [...a]; // [5, 3. 9, 2, 7]
```

```javascript
const d = {name: 'susan'};
const e = {...d, age: 20}; // {name: 'susan', age: 20}
const f = {...d}; // {name: 'susan'}
```

```javascript
const user = {name: 'susan', age: 20};
const new_user = {...user, age: 21}; // {name: 'susan', age: 21}
```

### Object Property Shorthand

```javascript
const name = 'susan';
const age = 20;
const user = {name: name, age: age};
```

```javascript
const user = {name, age};
```

```javascript
const user = {name, age, active: true}; // {name: 'susan', age: 20, active: true}
```

### Destructuring Assignments

```javascript
const a = ['susan', 20];
let name, age;
[name, age] = a;
```

```javascript
const b = [1, 2, 3, 4, 5];
let c, d, e;
[c, d, ...e] = b;
console.log(c); // 1
console.log(d); // 2
console.log(e); // [3, 4, 5]

```

```javascript
const user = {name: 'susan', active: true, age: 20};
const {name, age} = user;
console.log(name); // susan
console.log(age); // 20
```

```javascript
const f = ({name, age}) => {
    console.log(name); // susan
    console.log(age); // 20
};

const user = {name: 'susan', active: true, age: 20};
f(user);
```

### Classes

```javascript
class User {
    constructor(name, ae, active) { // constructor
        this,name = name;
        this.age = age;
        this.active = active;
    }

    isActive() { // standard method
        return this.active;
    }

    async read() { // async method
        const r = await fetch(`https://example.com/${this.name}`);
        const data = await r.json();
        return data;
    }
}
```

```javascript
const user = new User('susan', 20, true)
```

### JSX

```javascript
const paragraph = document.createElement('p');
paragraph.innerText = 'Hello, world!';
```

```javascript
const paragraph = <p>Hello, world!</p>;
```

```javascript
const myTable = (
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Susan</td>
            <td>20</td>
        </tr>
        <tr>
            <td>John</td>
            <td>40</td>
        </tr>
    </table>
);
```

