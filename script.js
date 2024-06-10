

const countriesCountainer = document.querySelector('.countries-container')
const cap = document.querySelector('.cap')

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country)
      const countryCard = document.createElement('a')
      countryCard.classList.add('country-card')
      countryCard.href= `/country.html?name=${country.name.common}`
    
      
      countryCard.innerHTML  = `
     
      <img src="${country.flags.svg}" alt="">
      <div class="card-content">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital}</p>
      </div>`
    
      countriesCountainer.append(countryCard)
    });
  });
 

