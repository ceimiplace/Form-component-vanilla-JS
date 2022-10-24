let form = document.querySelector(".form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let password = document.querySelector("#password");
let confirmedPass = document.querySelector("#confirmedpassw");
let email = document.querySelector("#email");
let errorClasses = ["error", "error-border"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkLength(firstName, 1, "Please enter first name");
  checkLength(lastName, 1, "Please enter  last name");
  checkLength(firstName, 1, "Please enter first name");
  checkLength(email, 1, "Please enter email ");
  if (checkLength(password, 6, "Password Too Short")) {
    checkEqual(password, confirmedPass);
  }
});

function checkEqual(elem1, elem2) {
  if (elem1.value !== elem2.value) {
    errorClasses.forEach((elem) => {
      elem2.value = "";
      elem2.placeholder = "Password do not match";
      elem1.classList.add(elem);
      elem2.classList.add(elem);
    });
    elem1.addEventListener("animationend", (e) => {
      e.target.classList.remove("error");
    });
    elem2.addEventListener("animationend", (e) => {
      e.target.classList.remove("error");
    });
  } else {
    errorClasses.forEach((elem) => {
      elem1.classList.remove(elem);
      elem2.classList.remove(elem);
    });
  }
}
function checkLength(thingToCheck, value = 6, errorMessage) {
  if (thingToCheck.value.length < value) {
    errorClasses.forEach((elem) => {
      thingToCheck.classList.add(elem);
    });
    thingToCheck.addEventListener("animationend", () => {
      thingToCheck.classList.remove("error");
    });
    console.log(errorMessage);
    console.log(thingToCheck.value);
    if (errorMessage) {
      thingToCheck.value = "";
      thingToCheck.placeholder = errorMessage;
    }
  } else {
    errorClasses.forEach((elem) => {
      thingToCheck.classList.remove(elem);
    });
    return true;
  }
}
