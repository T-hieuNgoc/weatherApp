const $ = document.querySelector.bind(document)

const search = $('.search')
const city = $('.city')
const country = $('.country')
const value = $('.value')
const shortDesc = $('.short-desc')
const moreDesc = $('.more-desc')
const visibility  = $('.visibility span')
const wind  = $('.wind span')
const sun  = $('.sun span')
const time  = $('.time ')
const content  = $('.content ')
const body  = $('body ')


async function changeWeather(citySearch){

   let api = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=8368c3dab3e546d410c85b6826c8496d`;

  let data = await fetch(api)
    .then(res => res.json())
    console.log(data);

    if(data.cod != 404){
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        let temp  = data.main.temp + '°C'
         value.innerText = temp 
        time.innerText = new Date().toLocaleString('vi')
        content.classList.remove('none')

        if(temp > '25'){
            body.setAttribute('class', 'summer')
        }
        if(temp <= '25'){
        body.setAttribute('class', 'fall')
        }

        if(temp <= '20'){
            body.setAttribute('class', 'spring')
        }

        if(temp <= '16'){
            body.setAttribute('class', 'winter')
        }
        
    }else{
        // content.innerText = 'OPP'
        
        content.classList.add('none')
    }
    
    
}

search.onkeyup  = (e)=>{
    if(e.keyCode == '13'){
        citySearch=  search.value.trim()
        changeWeather(citySearch)
        
    };
}

changeWeather('ha noi')
