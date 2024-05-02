const main = document.querySelector("main");

function index() {
    /* codehtml */
}
/* index() */

const header = document.querySelector("header");
const button = document.querySelector("#btnClear");

header.classList.add("d-flex");
header.classList.add("justify-content-between");
header.classList.add("justify-content-center");
header.classList.add("align-items-center");
header.classList.add("px-5");

button.classList.add("btn");
button.classList.add("btn-dark");
button.classList.add("rounded-4");

btnClear.addEventListener("click", clearMain());
function clearMain() {
    main.innerHTML = "";
}


button.addEventListener("click", () => {
    Swal.fire("Cleaned!");
})

