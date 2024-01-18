// let users = ["ram","sita","hari" ];
// users = ["user1","users2","users3"];
// console.log("users",users)



let course = ["mern", "pythone", "Qa"]

couerses = [
    {
        title: "mern",
        teacher: "abc",
        duration: "3 month",
        syllabus: [
            {
                topic: "js",
                duration: "1 days",
                time: "1 hour",
               


            },
            {
                topic: "recation",
                duration: "12 days",
                time: "2 hour",
               

            },
            {
                title: "pythone",
                teacher: "XYZ",
                duration: "3 months",
                time: "3hours",
                
            }


        ]
    },
    {
        title: "Qa",
        teacher: "XYZ",
        duration: "3 month",
        time:"2hours",
       
    }


]


console.log(couerses);
console.log("1st index",couerses[0].syllabus[0].duration);
couerses[0].syllabus[0].duration="10 days";

console.log("After change",couerses);


console.log("4th index",couerses[0].syllabus[2]);
couerses[0].syllabus[2].duration="20 days";
console.log("After change",couerses);




//.log(couerses[0].title[1].syallbus[2]="qwe");



// console.log(courses[0].duration[2].teacher="PQR" );
/*

console.log(couerses);
console.log("1st index",courses[1]);
courses[3].syllabus[0].duration="10days"
console.log("after change",courses[3].syllabus[0].duration);

*/
//console.log(couerses[]);





users = [
    {
    name:"ram",
    address:"Acbd",
    contact:[
        {
        ncell1:9818776554,
        ncell2:9818876542,
        ntc:9848987621

        }


    ]
},
{

    name:"sita",
    adress:"ABC",
    contact:[
        {
            ncell:9818987652,
            ntc1:984881233,
            ntc2:9810032588,
        }
    ]
   
},

];

console.log(users);

console.log("1st index",users[0].contact[0]);
users[0].contact[0].ncell1=9887654358
console.log("after change",users);





let usersData = [
    {
      name: "ram",
      contacts: [
        {
          number: 9234234,
          "service provider": "ntc",
        },
        {
          number: "ONE", // CHANGE THIS TO 984042..
          "service provider": "ntc",
        },
        {
          number: 98034,
          "service provider": "ncell",
        },
      ],
    },
    {
      name: "sita",
      /* OTHER DATAS.. */
    },
  ];







  
