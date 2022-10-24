let form = document.querySelector(".form");
let firstName = document.querySelector("#firstName");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkLength(firstName, 5);
});

function checkLength(thingToCheck, value) {
  console.log(thingToCheck);
  if (thingToCheck.value.length < value) {
    thingToCheck.classList.add("error");
  }
}
