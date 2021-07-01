let allCountries = document.querySelector('#countries')
let details = document.querySelector('#details')

fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data =>{
  displayCountries(data)

})

let displayCountries = (countries)=>{
    for (let i = 0; i < countries.length; i++) {
        const element = countries[i];
        console.log(element.name);
        let singleCountryDiv = document.createElement('div')
        let countryInfo = `
            <h3>${element.name}</h3>
            <p>${element.capital}</p>
            <button onClick = "displayCountryInfo('${element.name}')">Details</button>     
         `
        singleCountryDiv.innerHTML = countryInfo
        allCountries.appendChild(singleCountryDiv)        
    }

}

let displayCountryInfo = (name) =>{
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then (data=>{
        console.log(data[0])
        details.innerHTML = `
        <div>
        <h3>${data[0].name}</h3>
        <img src="${data[0].flag}"></img>
        <p>${data[0].region}</p>
        <p>${data[0].population}</>
        <p>${data[0].currencies[0].name}</>
        </div>    
        `
        details.style.display = 'block'
    })

}