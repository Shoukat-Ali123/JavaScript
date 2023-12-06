// Dates

// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


 let mynewdate = new Date(2023,0,25)
// console.log(mynewdate.toDateString());
// let mynewdate = new Date(2023,0,25,5,3,12)
// console.log(mynewdate.toLocaleString());

// let datestamp = Date.now()
// console.log(datestamp);

mynewdate.toLocaleString('default' , {
    weekday: "long"
})

console.log(mynewdate);