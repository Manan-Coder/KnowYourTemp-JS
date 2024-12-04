document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const apikey = "61bb868f018b49489ce150517242509";
    const srchButton = document.getElementById("srch-button");



    const cityName = document.getElementById('city');
    const stateName = document.getElementById('state')
    const countryName = document.getElementById('country');
    const temp_c = document.getElementById('temperature_c')
    const temp_f = document.getElementById('temperature_f')
    const aqi = document.getElementById('aqi')
    const locTime = document.getElementById('localtime')
    const daynight = document.getElementById('daynight')
    async function getData(KEY, cityName) {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityName}&aqi=yes`);
        return await response.json();
    }

    srchButton.addEventListener('click', async () => {
        const input = cityInput.value;
        const result = await getData(apikey, input);
        window.open("result.html");
        cityName.innerText = `{result.location.name}`
        stateName.innerText = `{result.location.region}`
        countryName.innerText = `{result.location.country}`
        temp_c.innerText = `{result.current.temp_c}`
        temp_f.innerText = `{result.current.temp_f}`
        locTime.innerText = `{result.current.localtime}`
        if (result.current.is_day == 1) {
            daynight.innerText = `Day`
        }
        else { daynight.innerText = `Night` }



    });
});
