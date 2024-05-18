const clock = document.querySelector('#clock');
setInterval(function(){
    let date = new Date();
    clock.textContent = date.toLocaleTimeString();
},1000)