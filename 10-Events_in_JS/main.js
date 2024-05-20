// Click on ul to hide a Image

document.querySelector('#images').addEventListener('click', function(e){
    // console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …
    // console.log(e.target); // <img src="https://=....tinysrgb&w=600" alt="photoshop" id="photoshop">
    // console.log(e.target.parentNode); // <li class--> ... </li>

    
    let removeImg = e.target.parentNode;

     // Option 1 -----------------------
    // removeImg.remove();
    // here in this method, there is an issue that if you mistakly clicked on any li it will remove all images at once so op-3

    // option 2 ------------------------
    // removeImg.parentNode.removeChild(removeImg); -- same issue so use conditional statement


    // Option 3 ------------------------
    console.log(e.target.tagName); // IMG
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        // let removeImg = e.target.parentNode;
        removeImg.remove();
    }

})