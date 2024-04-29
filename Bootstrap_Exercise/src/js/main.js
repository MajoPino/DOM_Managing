

let one = document.getElementById("btn-one") //Calls the element by its id
let two = document.getElementsByClassName("btn-two") //Calls the element by its class name
let three = document.getElementsByName("btn-three") //Calls the element by its name
let four = document.getElementsByTagName("button") //Call the element by its tag name

console.log(one)
console.log(two[0])
console.log(three[0])
console.log(four[3])

//Using an addEventListener to show a message every time the button is clicked
one.addEventListener("click", function () {
    Swal.fire("Hi Marc!");
})

//The same as above, but using querySelector

let first = document.querySelector("#btn-first") //Calls the element by its id
let second = document.querySelectorAll(".btn-second") //Calls the element by its class name
let third = document.querySelectorAll("[name='btn-third']") //Calls the element by its name
let fourth = document.querySelectorAll("button") //Calls the element by its tag  name

console.log(first)
console.log(second[0])
console.log(third[0])
console.log(fourth[7])