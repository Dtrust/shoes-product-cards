import loader from '../modules/loader'


export const getCards = async (url ) => {
    const res = await fetch(url)

    function errorHandler(parentContainer) {
        const element = document.querySelector(parentContainer)
        element.innerHTML = `<p>Sorry, the connection to JSON database is failed<br> Please, try again later</p>`
    }

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`, errorHandler('.loader'))
    }
    loader('.loader')
    return await res.json()
}
