import 'whatwg-fetch'
import {getCards} from './services/services'
import cardRotate from './modules/rotateCards'
import outputConsoleName from './modules/consoleName';

window.addEventListener('DOMContentLoaded', () => {
    class Product {
        constructor(parentSelector, logo, circleBg, imgSrc, imgAlt, title, price, desc, sizes ) {
            this.parent = document.querySelector(parentSelector)
            this.logo = logo
            this.circle = circleBg
            this.imgSrc = imgSrc
            this.imgAlt = imgAlt
            this.title = title
            this.price = price
            this.desc = desc
            this.sizes = sizes
        }

        render() {
            const element = document.createElement('li')
            element.classList.add('market-item')
            element.classList.add('card')

            element.innerHTML = `
                <div class="card-logo">${this.logo}</div>
                <div class="card-preview">
                  <div class="card-preview__circle"></div>
                  <img class="card-preview__img" src=${this.imgSrc} alt=${this.imgAlt}>
                </div>
                <div class="card-info">
                    <a class="card-info__link" href="#">
                        <h3 class="card-info__title">${this.title}</h3>
                    </a>
                    <p class="card-info__price">
                        <span class="count">${this.price}</span>
                        <span class="mark">&nbsp;$</span>
                    </p>
                    <p class="card-info__desc">${this.desc}</p>
                    <div class="card-info__options">
                        <p class="options-title">Sizes:</p>
                        <ul class="options-list"></ul>
                    </div>
                <div class="card-purchase">
                    <button class="card-purchase__btn btn">By now</button>
                </div>
            `
            element.querySelector('.card-preview__circle').style.background = `linear-gradient(to right, ${this.circle})`

            this.parent.appendChild(element)

            const options = element.querySelector('.options-list')
            const buttons = this.sizes.map(item =>`<li class="options-item"><button class="options-btn btn">${item}</button></li>`)

            buttons.forEach(item => {
                options.innerHTML += `${item}`
            })
        }
    }

    getCards('https://dtrust.github.io/shoes-product-cards/data/db.json')
        .then(data => {
            data.forEach(({logo, circleBg, imgSrc, imgAlt, title, price, desc, sizes }) => {
                new Product( '.market-list', logo, circleBg, imgSrc, imgAlt, title, price, desc, sizes).render()
            })

            const card = document.querySelectorAll(".card")

            card.forEach(item => {
                cardRotate(item)
            })

        })

    outputConsoleName('%c D %c E %c N %c N %c I %c S ')
})
