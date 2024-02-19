const student={name:'sohel',age:30,country:'bangladesh'};
const getCountry=person=>person.country;
const cnt=getCountry(student);
console.log(cnt);

const arry=[2,4,5,77,90,44];
const getThird=value=>value[2];
const value=getThird(arry);
console.log(value);

const doMath=(x,y,z)=>{
    const sum=x+y+z;
    const Multiply=x*y*z;
    const total=sum+Multiply;
    return total
}
console.log(doMath(4,5,7));

const max=Math.max(2,44,55,3,7,9,99,10)
console.log(max);

const array=[11,33,55,80,67,103,500];
const arrayMaxNumber=Math.max(...array)
console.log(arrayMaxNumber);


const friends=['sohel','masud','belal'];

const newFriends=[...friends,'rasel'];
// or 
const newNewFriends=['akash','batash',...friends,'chikku'];
console.log(newNewFriends);

// distructuring

const studentName={
    name:'sohel',
    age:28,
    mobile:'0182374940',
    study:'student'
}

const {name,mobile}=studentName;
console.log(name,mobile);

function double (a,b){
    return [a*2 , b*2]
}

const [res,p]=double(3,5)
console.log(res,p);


// up comment here

const laptop={
    name:'HP',
    color:'silver',
    price:200000,
    ram:'8gb'
}
// find the keys or property of this object
const keys=Object.keys(laptop);
// console.log(keys);

// find the values of the objects;

const values=Object.values(laptop);
// console.log(values);

// find the pair/entries of object  or display the  object of object

const pair=Object.freeze(laptop);

delete laptop.ram;
console.log(laptop);

