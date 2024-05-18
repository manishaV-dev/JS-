const buttons = document.querySelectorAll(".btn");
// console.log(buttons); nodelist
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "grey") {
      // body.style.backgroundColor = "grey";
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
