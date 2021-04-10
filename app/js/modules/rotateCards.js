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

export default cardRotate
