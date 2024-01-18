


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


let apiResponse = {
    data: {
        total: 2,
        result: {
            data: usersData,
        },
    },
};
console.log(apiResponse);




let classes = [
     {
    class:"one", 
        section: [
            {
            SECT: "A",
            SECTI: "B",
            SEC: "C"
            },
            {
                teacher:"asdd",
                sub:"cde",
                time:"1 hour"
            }
        ],


    },
    {

    class:"two",
        section: [
            {
            SEC:"A",
            SECT:"B",
            SECTI:"C"
            
            },
             {
                teacher:"asdd",
                sub:"cde",
                time:"1 hour"
            },
        ],


    },
    {
    class:"three",
        section: [
            {
            SECT: "A",
            SECTI: "B",
            SEC: "C"
            },

             {
                teacher:"asdd",
                sub:"cde",
                time:"1 hour"
            },
        ],
    },


    
];

console.log("classes",classes);



