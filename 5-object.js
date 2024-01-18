

let colore = "red"
colore = {
    name: "red",
    hexValue: "#FF0000",
    rgbValue: "red(255,0,0)",

};
console.log(colore);

let mywatch = "casio"
mywatch = {
    brand: "casio",
    type: "analogue",
    price: "hun",
    modelNumber: 1234,

};
console.log("before", mywatch.price);
mywatch.price = 1000,
    console.log("after", mywatch.price);

// let users = ["ram","sita","hari"]

let user1 = "ram"

user1 = {
    name: "ram",
    permanentAddress: {
        province: 1,
        district: "jhapa",
        street: "ktm",
    },
    temporaryAddress: {
        province: 3,
        district: "kahtmandu",
        street: "putalisadak",
    },

};

console.log(user1.permanentAddress.district);
console.log(user1.temporaryAddress.district);
console.log(`ram is from jhapa`);


let input1 = 1;
let input2 = 100;
let sum = input1 + input2;

console.log(`sum of ${input1} + ${input2} = ${sum}`);



let user2 = "sita"

user2 = {
    name: "ram",
    number:98876554,
    permanentAddress: {
        province: 1,
        district: "jhapa",
        street: "ktm",
    },
    temporaryAddress: {
        province: 3,
        district: "kahtmandu",
        street: "putalisadak",
    },

};

console.log(user2.permanentAddress.district);
console.log(user2.number);
console.log(user2.temporaryAddress.district);
console.log(`sita is from jhapa`);


let user3 = "hari"

user3 = {
    name: "ram",
    number:98876554,
    permanentAddress: {
        province: 1,
        district: "jhapa",
        street: "ktm",
    },
    temporaryAddress: {
        num : 98766554,
        province: 3,
        district: "kahtmandu",
        street: "putalisadak",
    },

};

console.log(user3.permanentAddress.district);
console.log(user3.temporaryAddress.num);
console.log(user3.temporaryAddress.district);
console.log(`hari is from jhapa`);


let users = ["ram","sita","hari" ];
users = ["user1","users2","users3"];
console.log("users",users);




let input8 = 100;
let input9 = 1000;
let summ = input8 + input9;

console.log(`sum of ${input8} + ${input9} = ${summ}`);
