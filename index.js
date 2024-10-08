const countriesSection = document.querySelector('.countries')
const regionSelector = document.querySelector('#region-selector')


const fetchCountries = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    data.map((country) => {
        const slug = country.name.official.toLowerCase().split(' ').join('-')
        const countryCard = document.createElement('div')
        countryCard.innerHTML = `<article>
    <img src="${country.flags.png}" alt"${country.flags.alt}" height="160" width="264">
    <h2>${country.name.common}</h2>
    <a href="country.html?name=${slug}">${country.name.common}</a>
    <p><strong>Population: </strong>${country.population}</p>
    <p><strong>Region: </strong>${country.region}</p>
    <p><strong>Capital: </strong>${country.capital}</p>
</article>`

    countriesSection.append(countryCard)
    })
    console.log(data);
    return data
}

fetchCountries('https://restcountries.com/v3.1/all')



regionSelector.addEventListener('change', () => console.log(regionSelector.value))