document.addEventListener('DOMContentLoaded', function () {

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
            let currencyCode = Object.keys(country.currencies)[0]
            let currencyName = country.currencies[currencyCode].name
            let languageCodes = Object.keys(country.languages) 
            let languageNames = languageCodes.map((langCode) => country.languages[langCode])
            console.log(languageNames);

                countryDetail.innerHTML = `<section class="country-detail">
        
        <img src="${country.flags.png}"
            alt="" height="400" width="600">
        <article>

            <header>
                <h1>${country.name.common}</h1>
            </header>
            <div>
                <div class="col-1">
                    <p><strong>Native name: </strong></p>
                    <p><strong>Population: </strong>${country.population}</p>
                    <p><strong>Region: </strong>${country.region}</p>
                    <p><strong>Subregion: </strong>${country.subregion}</p>
                    <p><strong>Capital: </strong>${country.capital}</p>
                </div>
                <div class="col-2">
                    <p><strong>Top Level Domain: </strong>${country.tld}</p>
                    <p><strong>Currencies: </strong>${currencyName}</p>
                    <p><strong>${languageNames.length > 1 ? `Languages: ` : `Language: `}</strong>${languageNames}</p>
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

