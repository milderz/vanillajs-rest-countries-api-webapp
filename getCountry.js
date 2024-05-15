const countryName = document.querySelector('.country-name')

const query = new URLSearchParams(window.location.search)
const params = query.get('name')
countryName.innerHTML = params.split('-', ' ')





