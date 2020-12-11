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
            element.classList.add('market-item', 'card')

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
                    </div>
                <div class="card-purchase">
                    <button class="card-purchase__btn btn">By now</button>
                </div>
            `
            element.querySelector('.card-preview__circle').style.background = `linear-gradient(to right, ${this.circle})`

            this.parent.appendChild(element)

            const options = element.querySelector('.card-info__options')
            const buttons = this.sizes.map(item =>`<button class="options-btn btn">${item}</button>`)

            buttons.forEach(item => {
                options.innerHTML += `${item}`
            })
        }
    }

    const getCards = async (url) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
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

    //Movement Animation to happen
    function cardRotate(card) {

        function cursorEnter() {
            card.style.transition = 'none'
            card.classList.add('rotate')
        }

        function beginTransform(e) {
            let xAxis = (window.innerWidth / 2 - e.clientX) / 25
            let yAxis = (window.innerHeight / 2 - e.clientY) / 25

            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        }

        function endTransform(e) {
            card.style.transition = 'all 0.5s ease'
            card.style.transform = `rotateY(0deg) rotateX(0deg)`
            card.classList.remove('rotate')
        }

        if ('ontouchstart' in document.documentElement) {
            card.addEventListener('touchstart', cursorEnter)
            card.addEventListener('touchmove', beginTransform)
            card.addEventListener('touchend', endTransform)
        } else {
            card.addEventListener('mousemove', beginTransform)
            card.addEventListener('mouseenter', cursorEnter)
            card.addEventListener('mouseleave', endTransform)
        }
    }

})