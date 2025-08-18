async function getCoordinates(city) {
	const url1 = `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${city}`;
	const options1 = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '110a9c9015msh5b5c2846f427778p1414d3jsn3a8abf378147',
			'x-rapidapi-host': 'geocoding-by-api-ninjas.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url1, options1);
		const data = await response.json(); // ✅ parse JSON instead of text
		console.log("Geocoding result:", data);

		if (!data || data.length === 0) {
			console.error(`No coordinates found for city: ${city}`);
			return null;
		}
		return { lat: data[0].latitude, lon: data[0].longitude };

	} catch (error) {
		console.error(error);
		return null;
	}
}
async function getWeather(city) {
	const coords = await getCoordinates(`${city}`);
	if (!coords) return;
	cityName.innerHTML=city;
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${coords.lat}&lon=${coords.lon}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '110a9c9015msh5b5c2846f427778p1414d3jsn3a8abf378147',
			'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options)
		const data= await response.json();
			cloud_pct.innerHTML= data.cloud_pct;
			temp2.innerHTML=data.temp;
			temp.innerHTML= data.temp;
			feels_like.innerHTML= data.feels_like;
			humidity.innerHTML= data.humidity;
			humidity2.innerHTML= data.humidity;
			min_temp.innerHTML= data.min_temp;
			max_temp.innerHTML= data.max_temp;
			wind_speed.innerHTML= data.wind_speed;
			wind_speed2.innerHTML= data.wind_speed;
			sunrise.innerHTML= data.sunrise;
			sunset.innerHTML= data.sunset;
			console.log(data);
		
	} catch (error) {
		console.error(error);
	}
}
getWeather("Seoul");
submit.addEventListener('click', (e)=>
	{
		e.preventDefault();
		getWeather(city.value);
	});
