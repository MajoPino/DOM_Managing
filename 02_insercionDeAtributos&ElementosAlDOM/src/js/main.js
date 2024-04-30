/* const main = document.getElementsByTagName('main') */

//Add an img to the index.html from main.js

/* const main = document.querySelector('main')
const dog = document.createElement('img')

dog.id = 'dog'
dog.src = './public/img/Pastor-Belga.webp'
dog.alt = 'Pastor Belga'
dog.width = '190'

dog.setAttribute('src', './public/img/Rottweiler.jpg')

dog.removeAttribute('id')

main.appendChild(dog)
 */

/* const card = document.querySelector('.card')

console.log(card)
card.classList.remove('border')
card.classList.remove('border-4')
card.classList.remove('border-secondary')
card.classList.remove('rounded-3')
card.classList.add('text-center') */

const main = document.querySelector('main')

for (let i = 0; i < 70; i++) {
    main.innerHTML += `
    <div class="card text-center" style="width: 18rem;">
        <img src="./public/img/Doberman.jpg" class="card-img-top" alt="Doberman" title="dog">
        <div class="card-body">
             <h2>Zoro</h2>
             <p>
                <strong>Age:</strong><span> 4yo.</span><br>
                <strong>Breed:</strong><span> Doberman</span>
            </p>
            <button class="btn btn-dark" type="button">Watch details</button>
        </div>
    </div>
    `
}