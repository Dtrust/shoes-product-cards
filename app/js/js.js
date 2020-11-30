
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

new Product(
    '.market-list',
    '<svg style="margin-top:10%;" version="1.1" id="adidas" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="55px" viewBox="0 0 400 300" enable-background="new 0 0 400 300" xml:space="preserve"><path d="M354.819,230.813c-9.405-2.266-21.697-1.941-21.697-7.814c0.723-4.229,4.329-5.199,10.128-5.199c8.685,0,9.405,4.901,9.405,7.813h14.456c-0.697-11.396-10.104-18.885-24.583-18.885c-15.179,0-23.888,8.137-23.888,18.563c0,5.848,2.911,11.396,7.962,14.009c3.634,1.617,8.684,2.937,15.204,3.881c5.771,0.995,11.569,1.319,12.291,5.873c0,2.937-3.607,6.843-10.127,6.843c-9.406-0.324-11.569-5.523-11.569-9.431h-15.204c0.722,11.72,10.152,19.854,26.053,19.854c14.48,0,26.051-5.522,26.051-19.854C369.301,238.624,363.504,233.1,354.819,230.813z"/><polygon points="142.899,187.105 116.125,141.173 66.211,170.16 75.617,187.105 "/><rect x="163.929" y="206.613" width="14.394" height="57.977"/><path d="M76.312,212.025c-5.05-3.559-10.85-5.2-17.368-5.2c-15.9,0-29.635,13.036-29.635,29.635c0,16.596,13.734,29.958,29.635,29.958c6.519,0,13.039-1.643,17.368-4.9v3.581h14.481v-57.627H76.312V212.025z M59.666,253.055c-8.659,0-16.622-7.488-16.622-16.596c0-8.783,7.962-16.598,16.622-16.598c9.432,0,16.646,7.813,16.646,16.598C76.312,245.566,69.097,253.055,59.666,253.055z"/><polygon points="319.42,187.093 232.605,36.655 182.691,65.965 252.137,187.093 "/><path d="M142.898,212.025c-5.077-3.559-10.874-5.2-17.369-5.2c-16.646,0-29.659,13.036-29.659,29.635c0,16.596,13.013,29.958,29.659,29.958c6.495,0,12.292-1.643,17.369-4.9v3.581h14.456v-77.481h-14.456V212.025z M126.251,253.055c-9.404,0-16.646-7.488-16.646-16.596c0-8.783,7.241-16.598,16.646-16.598c8.659,0,16.647,7.813,16.647,16.598C142.898,245.566,134.91,253.055,126.251,253.055z"/><polygon points="175.451,89.75 124.816,118.389 163.881,187.088 163.881,201.421 178.338,201.421 178.338,187.088 231.163,187.088 "/><path d="M359.92,201.872c4.329,0,7.241-3.259,7.241-7.166s-2.912-7.166-7.241-7.166c-3.633,0-7.239,3.259-7.239,7.166S356.287,201.872,359.92,201.872z M359.92,188.536c3.607,0,5.772,2.909,5.772,6.17c0,3.26-2.165,6.194-5.772,6.194c-3.633,0-5.798-2.936-5.798-6.194S356.287,188.536,359.92,188.536z"/><path d="M358.526,195.379h1.442l1.443,3.26h1.443l-1.443-3.26c0.722-0.324,1.443-0.971,1.443-2.266c0-1.293-1.443-2.289-2.165-2.289h-3.261v7.813h1.096L358.526,195.379L358.526,195.379z M358.526,191.82h1.442c1.443,0,1.443,0.623,1.443,1.295c0,0.971,0,1.294-1.443,1.294h-1.442V191.82z"/><path d="M297.64,212.025c-5.053-3.559-10.85-5.2-17.369-5.2c-16.62,0-29.634,13.036-29.634,29.635c0,16.596,13.014,29.958,29.634,29.958c6.521,0,12.316-1.643,17.369-4.9v3.581h13.759v-57.627H297.64V212.025L297.64,212.025z M281.018,253.055c-9.405,0-16.646-7.488-16.646-16.596c0-8.783,7.24-16.598,16.646-16.598c8.685,0,16.622,7.813,16.622,16.598C297.64,245.566,289.703,253.055,281.018,253.055z"/><path d="M231.154,212.025c-4.354-3.559-10.151-5.2-16.646-5.2c-16.646,0-30.381,13.036-30.381,29.635c0,16.596,13.735,29.958,30.381,29.958c6.494,0,12.291-1.643,16.646-4.9v3.581h14.457v-77.481h-14.457V212.025z M214.509,253.055c-8.685,0-16.646-7.488-16.646-16.596c0-8.783,7.962-16.598,16.646-16.598c9.405,0,16.646,7.813,16.646,16.598C231.154,245.566,223.914,253.055,214.509,253.055z"/></svg>',
    'rgba(245, 70, 66, 0.75), rgba(8, 83, 156, 0.75)',
    'assets/img/adidas.png',
    'adidas zx',
    'Adidas ZX 2K Boost',
    '160',
    'Future-ready trainers with wrapped boost for exception comfort',
    [39, 40, 41, 42, 43]
).render()

new Product(
    '.market-list',
    '<svg style="margin-top:7%;margin-left:2%;" version="1.1" id="puma" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" inkscape:version="0.48.2 r9819" sodipodi:docname="Sustainability_Report_Perspective.pdf" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="70px" viewBox="0 0 400 300" enable-background="new 0 0 400 300" xml:space="preserve"><path id="animal" inkscape:connector-curvature="0" fill="#E63129" d="M214.231,66.336c-1.122,0.165-2.2,4.298-4.369,6.453c-1.585,1.551-3.565,1.458-4.616,3.378c-0.399,0.714-0.271,1.941-0.722,3.113c-0.888,2.354-4.002,2.563-4.002,5.125c-0.01,2.767,2.595,3.294,4.857,5.261c1.765,1.578,1.935,2.667,4.07,3.436c1.826,0.617,4.54-1.408,6.983-0.679c2.003,0.595,3.923,1.025,4.378,3.085c0.399,1.902-0.029,4.843-2.462,4.503c-0.819-0.094-4.377-1.288-8.74-0.823c-5.273,0.6-11.285,2.318-11.873,8.196c-0.325,3.28,3.739,7.153,7.662,6.366c2.71-0.53,1.429-3.731,2.901-5.283c1.938-1.993,12.911,6.947,23.106,6.947c4.294,0,7.488-1.086,10.659-4.407c0.296-0.255,0.658-0.797,1.115-0.833c0.434,0.036,1.188,0.461,1.438,0.642c8.209,6.601,14.421,19.846,44.608,19.998c4.247,0.024,9.08,2.053,13.032,5.654c3.521,3.255,5.578,8.326,7.582,13.464c3.023,7.712,8.434,15.214,16.644,23.563c0.447,0.447,7.207,5.701,7.749,6.093c0.082,0.06,0.58,1.243,0.407,1.903c-0.199,5.01-0.929,19.564,9.924,20.225c2.652,0.134,1.96-1.73,1.96-3.014c-0.007-2.535-0.47-5.056,0.866-7.653c1.826-3.569-3.876-5.211-3.71-12.931c0.118-5.756-4.718-4.774-7.168-9.16c-1.414-2.54-2.671-3.885-2.58-6.993c0.553-17.484-3.722-28.975-5.851-31.797c-1.663-2.129-3.039-2.974-1.52-3.958c9.059-5.987,11.111-11.549,11.111-11.549c4.817-11.321,9.147-21.661,15.12-26.214c1.202-0.942,4.288-3.245,6.18-4.147c5.574-2.627,8.506-4.222,10.127-5.796c2.559-2.493,4.586-7.7,2.129-10.854c-3.055-3.895-8.333-0.805-10.66,0.577c-16.651,9.881-19.104,27.312-24.873,37.322c-4.602,7.998-12.082,13.873-18.772,14.353c-5.01,0.372-10.42-0.643-15.8-3.006c-13.09-5.738-20.249-13.147-21.945-14.457c-3.515-2.714-30.813-29.516-52.935-30.61c0,0-2.746-5.5-3.437-5.586c-1.616-0.21-3.273,3.28-4.46,3.688C217.234,70.298,215.358,66.152,214.231,66.336"/><path id="u" inkscape:connector-curvature="0" fill="#E63129" d="M116.855,226.289c-2.083-0.049-3.852-1.756-3.852-3.868l0.009-69.001H90.268v76.057c0,3.731,3.021,6.771,6.727,6.771h39.745c3.731,0,6.716-3.039,6.716-6.771V153.42h-22.721l-0.018,69.001C120.718,224.533,118.948,226.24,116.855,226.289"/><path id="m" inkscape:connector-curvature="0" fill="#E63129" d="M192.99,153.42h-34.414c-4.078,0-7.395,3.313-7.395,7.428v75.398h22.765v-69.163c0.014-2.117,1.729-3.798,3.847-3.798c2.122,0,3.829,1.641,3.876,3.74v69.221h22.666v-69.221c0.029-2.101,1.733-3.74,3.855-3.74c2.1,0,3.839,1.681,3.854,3.798v69.163h22.766v-75.398c0-4.113-3.328-7.428-7.398-7.428H192.99"/><path id="p" inkscape:connector-curvature="0" fill="#E63129" d="M75.1,215.435H52.127v20.813H29.398V153.42h45.846c4.104,0,7.31,3.335,7.31,7.46v47.088C82.553,212.105,79.222,215.435,75.1,215.435z M59.84,167.228c0.018-2.302-1.858-3.94-3.851-3.94h-3.862v41.893h3.861c2.006,0,3.868-1.595,3.85-3.891v-34.062"/><path id="a" inkscape:connector-curvature="0" fill="#E63129" d="M272.967,236.246v-20.795h-7.728v20.795h-22.718v-75.398c0-4.113,3.315-7.428,7.395-7.428h38.376c4.086,0,7.397,3.313,7.397,7.428v75.398H272.967z M272.967,205.193v-38.139c-0.056-2.107-1.751-3.729-3.873-3.729c-2.101,0-3.832,1.687-3.854,3.789v38.076L272.967,205.193"/></svg>',
    'rgba(254, 123, 55, 0.75), rgba(64, 81, 111, 0.75)',
    'assets/img/puma.png',
    'Puma Uproar Performance Review',
    'Puma Uproar Performance Review',
    '175',
    'The Uproar improves on the Puma`s Clyde Court Disrupt solid comeback to basketball shoes',
    [39, 40, 42, 44]
).render()

new Product(
    '.market-list',
    '<svg version="1.1" id="nike" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="-100 -114 400 300" enable-background="new -100 -114 400 300" xml:space="preserve"><path id="nike_1_" d="M-5.801,84.342c-8.089-0.32-14.709-2.535-19.884-6.646c-0.987-0.785-3.341-3.14-4.13-4.134c-2.099-2.638-3.525-5.207-4.478-8.056c-2.929-8.771-1.42-20.281,4.31-32.914c4.908-10.814,12.481-21.539,25.694-36.394c1.945-2.186,7.742-8.579,7.778-8.579c0.015,0-0.3,0.548-0.698,1.215C-0.645-5.413-3.584,1.366-5.186,7.232c-2.572,9.417-2.262,17.495,0.909,23.761c2.187,4.316,5.937,8.055,10.153,10.122c7.382,3.617,18.189,3.916,31.388,0.875c0.909-0.21,45.936-12.163,100.062-26.563c54.124-14.4,98.417-26.174,98.424-26.163c0.015,0.012-125.749,53.829-191.035,81.747c-10.34,4.42-13.105,5.536-17.964,7.243C14.325,82.617,3.195,84.699-5.801,84.342z"/></svg>',
    'rgba(153, 172, 82, 0.75), rgba(14, 19, 15, 0.75)',
    'assets/img/nike.png',
    'Nike Air Foamposite One ParaNorman',
    'Nike Air Foamposite One ParaNorman',
    '1 200',
    'This limited edition Air Foamposite One, created as a promotional piece for the Paranorman film',
    [38, 42, 44]
).render()

//Movement Animation to happen
const card = document.querySelectorAll(".card");

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

    //Moving Animation Event
    card.addEventListener('mousemove', beginTransform)
    //Animate In
    card.addEventListener('mouseenter', cursorEnter)
    //Animate Out
    card.addEventListener('mouseleave', endTransform)
}

card.forEach(item => {
    cardRotate(item)
})