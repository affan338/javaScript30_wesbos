const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

const listWrapper = document.querySelector('.list-wrapper');

const changeInput = (e) => {
    listWrapper.innerHTML = getListHTML(e.target.value);
}


const inputKey = document.querySelector('.input-city');

inputKey.addEventListener('keyup', changeInput);
inputKey.addEventListener('change', changeInput);

const getListHTML = (key) => {

    const results = searchCities(key);

    const re = new RegExp(key, 'gi');

    // const html = results.reduce((str, city) => {
    //     const newCity = city.city.replace(re, `<span class='highlight'>${key}</span>`)
    //     const newState = city.state.replace(re, `<span class='highlight'>${key}</span>`)

    //     console.log(newCity, newState);
    //     str += `
    //     <div class="item">${newCity}, ${newState}, - ${city.population}</div>
    //     `
    //     return str;
    // }, '')

    const html = results.map(city => {
        const newCity = city.city.replace(re, `<span class='highlight'>${key}</span>`);
        const newState = city.state.replace(re, `<span class='highlight'>${key}</span>`)

        return `
            <div class='item'><span>${newCity},&nbsp;&nbsp;&nbsp;${newState}</span><span>${city.population}</span></div>
        `
    }).join('')

    return html;
}

const searchCities = (searchKey) => {
    const re = new RegExp(searchKey, 'gi')
    return cities.filter((city) => {
        return city.city.match(re) || city.state.match(re)
    })
}


const fetchCities = async() => {
    cities = await fetch(endPoint);
    cities = await cities.json();
}

fetchCities();