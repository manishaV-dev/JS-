const course = {
    courseName : "javascript",
    price : 999,
    courseInstructure : 'Hitesh',
    streamOn : 'Youtube'
}

// course.courseInstructure;

// Object Destructure

const {courseName, streamOn} = course;
console.log(courseName, streamOn); // javascript Youtube
console.log(`Course is : ${courseName} and it is streaming on ${streamOn}`); 

// you can change the name of key
const {courseInstructure: instructure} = course;
console.log(instructure); // youtube