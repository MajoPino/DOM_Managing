const btnExecute = document.getElementById('btn-execute');
const main = document.querySelector('main');

function callBtnExample() {

    //Button element construction
    //
    //
    /* 
        btnExecute.addEventListener('click',() => {
            Swal.fire("Buttlon added succesfully!");
        })
     */


    const btnExample = document.createElement('button');

    //Clasic option
    btnExample.setAttribute('type', 'button');

    //Option 2
    btnExample.type = 'button';

    //
    btnExample.classList.add('btn', 'btn-secondary');

    btnExample.textContent = ':3';

    return btnExample;
}

function callBtnInfo() {
    const btnExample = document.querySelector('.btn-warning');
    return btnExample
}

/* btnExecute.addEventListener('click',() => {
    
    const btnExample = appendChildExample();
    main.appendChild(btnExample);
    btnExample.addEventListener('click',() => {
        Swal.fire("Hello :3");
    });
}) */

btnExecute.addEventListener('click', () => {
    const btnExampleRemove = callBtnInfo()
    main.removeChild(btnExampleRemove)

})


