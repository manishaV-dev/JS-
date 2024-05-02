let myDate = new Date();
console.log(myDate); // 2024-05-02T16:54:58.145Z
console.log(myDate.toString()); // Thu May 02 2024 22:25:53 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu May 02 2024

console.log(myDate.toISOString()); // 2024-05-02T16:54:58.145Z
console.log(myDate.toJSON()); // 2024-05-02T16:54:58.145Z

console.log(myDate.toLocaleDateString()); // 5/2/2024
console.log(myDate.toLocaleTimeString()); // 4:59:30 PM


console.log(typeof myDate); // Object

console.log(myDate.getFullYear()); // 2024 ---- Returns the year (4 digits) in the specified date according to local time.
console.log(myDate.getMonth() + 1); // 5 --- Returns the month (0 – 11) 
console.log(myDate.getDate()); // 2 ---- Returns the day of the month (1 – 31) in the specified date according to local time.
console.log(myDate.getDay()); // 4 ---- Returns the day of the week (0 – 6) in the specified date according to local time.
console.log(myDate.getHours()); // 17 ---- Returns the hour (0 – 23) in the specified date according to local time.
console.log(myDate.getMinutes()); // 12 --- Returns the minutes (0 – 59) in the specified date according to local time.
console.log(myDate.getSeconds()); // 24 --- Returns the seconds (0 – 59) 


let myCreatedDate = new Date(2024, 7, 9)
console.log(myCreatedDate.toDateString()); // Fri Aug 09 2024

myCreatedDate = new Date("01-01-2025")
console.log(myCreatedDate.toDateString()); // wed Jan 01 2025


let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1714671082513 -- Acc to 01 jan 1970
console.log(Math.floor(Date.now()/1000))


let localeDate = new Date();
console.log(localeDate)
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  console.log(localeDate.toLocaleString("Default", options)); // Thursday, May 2 2024
  console.log(localeDate.toLocaleString("de-DE", options)); // Donnerstag, 2. Mai 2024