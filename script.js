async function getCountryData() {
  const data = await fetch('https://restcountries.com/v3.1/region/ame')
  const countries = await data.json()

  // console.log(countries)
  const divEl = document.getElementById('countries')

  countries.map((country) => {
    const flag = country.flags.png
    const name = country.name.common

    divEl.innerHTML += `
      <div class="country">
        <img src="${flag}" alt="${name}">
        <h3>${name}</h3>
      </div>
    `
  })
}

getCountryData()

// peguei os dados dessa API https://restcountries.com/#api-endpoints-v3-all