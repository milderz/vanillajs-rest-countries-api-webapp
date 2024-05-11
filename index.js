const countriesSection = document.querySelector('.countries')



const fetchCountries = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    data.map((country) => {
        const slug = country.name.common.toLowerCase().split(' ').join('-')
        const countryCard = document.createElement('div')
        countryCard.innerHTML = `<article>
    <img src="${country.flags.png}" alt"${country.flags.alt}" height="160" width="264">
    <h2>${country.name.common}</h2>
    <a href="${slug}">${country.name.common}</a>
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



