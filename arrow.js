// const value=[{name:'sohel',age:29,nationality:'bangladesh'}];
// console.log(value[0]);

// double the array value;

const numbers=[2,4,6,8,9,11,22];
// const dobuled=[];

// for(const num of numbers){
//     const double=num * 2;
//     dobuled.push(double)
// }
// console.log(dobuled);

// way 2

function double(num){
    return num * 2
}

const result=numbers.map(double)

//  final way map

const array=[2,3,4,5,6,7,8];


const divide=array.map(nmu=>nmu /2);
console.log(divide);
// 


const value=[2,4,6,7,9];

const plus=value.map(val=>val + 5);

console.log(plus);
// 
// 

const friends=['mustofa','mehmed','bristy','sohel'];

const letter=friends.map(letters=>letters[0]);
console.log(letter);

// for Each use

const values=[2,3,5,7,8,9];
const forEachResult=values.forEach(num=>num+11);
console.log(forEachResult);

//  filter use , filter means condition and need to full fill to this;

const filterNumbers=[22,44,55,77,88];
const filter=filterNumbers.filter(fil=>fil < 44);
console.log(filter);

const findNumbers=[22,44,55,77,88];
const find=filterNumbers.find(fil=>fil < 44);
console.log(find);

// class constructor

// class className{
//     constructor (){...}
// }

class mobile{
 constructor (name,price,model){
    this.n=name;
    this.p=price;
    this.op=model
 }
    
}

const mobile1=new mobile('samsung',24000,'samsung-A50');
console.log(mobile1);
