document.addEventListener('DOMContentLoaded', function() {

const countryMain = document.querySelector('main')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
const countrySearch = params.split('-').join(' ')
// countryName.textContent = params.split('-').join(' ')

const fetchCountry = async (country) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await res.json()
    console.log(data);

    
    
    data.map((country) => {
        const countryDetail = document.createElement('section')
        countryDetail.innerHTML = `<section class="country-detail">
        <img src="${country.flags.png}"
            alt="" height="400" width="600">
        <article>

            <header>
                <h1>${country.name.common}</h1>
            </header>
            <div>
                <div class="col-1">
                    <p><strong>Native name: </strong>${country.name.nativeName.ron.official}</p>
                    <p><strong>Population: </strong></p>
                    <p><strong>Region: </strong></p>
                    <p><strong>Subregion: </strong></p>
                    <p><strong>Capital: </strong></p>
                </div>
                <div class="col-2">
                    <p><strong>Top Level Domain: </strong></p>
                    <p><strong>Currencies: </strong></p>
                    <p><strong>Languages: </strong></p>
                </div>
            </div>
            <footer>
                <p><strong>Border Countries: </strong></p>
            </footer>
        </article>




    </section>`
    countryMain.append(countryDetail)
    })
}

fetchCountry(countrySearch)





});

