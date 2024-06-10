const countryName = new URLSearchParams(location.search).get('name');
const countryFlag = document.querySelector('.country-details img')
const countryNameh1 = document.querySelector('h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const capital = document.querySelector('.capital')
const subRegion = document.querySelector('.sub-region')
const currency = document.querySelector('.currency')
const language = document.querySelector('.language')
const tld = document.querySelector('.tld')
const borderCountries = document.querySelector('.border-countries')
const backButtuon = document.querySelector('.back-button')
backButtuon.addEventListener('click',()=>{
  history.back()
})

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => 
    res.json()).then((name) => {

   
    countryFlag.src=name[0].flags.svg
    countryNameh1.innerText = countryName
    if(name[0].name.nativeName){
    nativeName.innerText = Object.values(name[0].name.nativeName)[0].common
    }
    else{
      nativeName.innerText = countryName
    }
    population.innerText = name[0].population.toLocaleString('en-IN')
    region.innerText = name[0].region
    if(name[0].capital){
      capital.innerText =  name[0].capital.join(', ')
    }
    if(name[0].subregion){
      subRegion.innerText = name[0].subregion
    }
    if(name[0].currencies){
     currency.innerText= Object.values(name[0].currencies).map((currency)=>currency.name).join(', ')
    }
    if(name[0].languages)
    {
      language.innerText = Object.values(name[0].languages).join(', ')
    }
    tld.innerText = name[0].tld.join(", ")
    if(name[0].borders){
      name[0].borders.forEach(border => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(res=>res.json()).then((data)=>{
         
          const borderCountryName = document.createElement('a')
          console.log(data[0].name.common)
          borderCountryName.innerText = data[0].name.common
          borderCountries.append(borderCountryName)
        })
      });
    }
  })
