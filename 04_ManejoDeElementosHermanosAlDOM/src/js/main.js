const header = document.getElementById('header')
const main = document.getElementById('main')
const footer = document.getElementById('footer')
const  btnExample = createAbutton()
const btnPoint = document.getElementById('btn-point')

//Insert element before content
/* main.before(btnExample) */

//Insert element after content
/* main.after(btnExample) */

//Insert element before first child
/* main.prepend(btnExample) */

//Insert element after last child
/* main.appendChild(btnExample) */
/* main.append(btnExample) */

//Replaces all children with the element
/* main.replaceChildren(btnExample) */

//Replaces the whole section with the element
/* main.replaceWith(btnExample) */

//Deletes the whole section (Self destruction)
/* main.remove() */

function createAbutton() {
    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-danger')
    btn.textContent = 'Click me'
    return btn
}

//Returns the children
/* console.log(main.children) */

//Returns the parent of the element
/* console.log(main.parentElement) */

//You can escalate the children to get to the higher parent
/* console.warn(btnPoint.parentElement.parentElement.parentElement) */

//Returns the first child of the element
/* console.log(main.firstElementChild) */

//Returns the last child of the element
/* console.log(main.lastElementChild) */

//Returns the previous sibling of the element
/* console.log(main.previousElementSibling) */

//Returns the next sibling of the element
/* console.log(main.nextElementSibling) */