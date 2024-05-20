// document.getElementById('butterfly').onclick = function(){
//     alert('This is also not a good practise to define events')
// }


// Best practise is that we should use EventListener

// document.getElementById('butterfly').addEventListener('click' , function(){
//     alert('yes! this is good')
// })

// attachEvent --- jQuery

document.getElementById('moon').addEventListener('click', function(e){ // e == event Object
    // console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

    // console.log(e.target); // <img src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="" id="moon">
    // console.log(e.timeStamp * 1000); // 2867900.0000059605
    // console.log(e.pageX , e.pageY); // 752 469
    // console.log(e.view.window.innerHeight); // 424
    // console.log(e.type); // click
}, false) // event Propogation

// should read about event object
// type, timeStamp, defaultPrevent, 
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode



// Event Propogation has two context
// 1. Event Bubbling        2. Event Capturing

// Event Bubbling - document.getElementById('moon').addEventListener('click', function(e){},false)- Most used in market- Default value

// Event Capturing - document.getElementById('moon').addEventListener('click', function(e){}, true)

// use case of Event Capturing

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('Click inside the ul')
// }) // by default value of Event Propogation is False so you don't have to write 

// document.getElementById('freedom').addEventListener('click', function(e){
//     console.log("freedom Clicked")
// })

/*
        here when you click on inside Ul -- console will be -- click inside the ul
        But when you click on freedom image -- console -- freedom Clicked
                                                          click inside the ul

        Here you can see, 
        In event bubbling - Event flows from the target element back to the document root.
                            Handlers are set with capture set to false (default).


*/

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('Click inside the ul')
// }, true) // by default value of Event Propogation is False so you don't have to write 

// document.getElementById('freedom').addEventListener('click', function(e){
//     console.log("freedom Clicked")
// }, true)


/*
        here when you click on inside Ul -- console will be -- click inside the ul
        But when you click on freedom image -- console -- click inside the ul
                                                          freedom Clicked
                                                          

        Here you can see, 
        In event capturing - Event flows from the document root to the target element. 
                                Handlers are set with capture set to true.


*/

// to stop event bubble

document.getElementById('images').addEventListener('click', function(e){
    console.log('Click inside the ul')
}) // by default value of Event Propogation is False so you don't have to write 

document.getElementById('freedom').addEventListener('click', function(e){
    console.log("freedom Clicked");
    e.stopPropagation();
})

/*
        here when you click on inside Ul -- console will be -- click inside the ul
        But when you click on freedom image -- console --   freedom Clicked

*/


// --  preventDefault

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("Google Cliked");
})