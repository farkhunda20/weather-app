const APIkey = "85f53c8b9b32cd9e343147e44f82e8f8";

const search_btn = document.getElementById("search-btn");
const cityref = document.getElementById("city");
const result = document.querySelector(".result");
const wrapper = document.querySelector(".wrapper");

async function getWeather() {
  let cityValue = cityref.value;

  url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}

&appid=${APIkey}&units=metric`;

  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData);

  if (cityValue.length == 0) {
    result.innerHTML = `
      <h3 id="error-message">please enter a city name</h3>

    `;
  } else {
    displayWeather(respData);
  }
}

let displayWeather = (data) => {
  result.innerHTML = `
 

<h2 class="city-name">${data.name}</h2>
        <p id="desc">${data.weather[0].description}</p>
        <img id="icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" ></img>
        <h2 id="temprature">${data.main.temp}</h2>
        <h6 id="min-temp">min ${data.main.temp_min}</h6>
        <h6 id="max-temp">max ${data.main.temp_max}</h6>
 
 `;
};

search_btn.addEventListener("click", () => {
  wrapper.style.height = "20rem";
  getWeather();
});
