import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "bf1c267a3c5474fc062188473f7ffea7";
    
    let getWeatherInfo = async () => {
        try{
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMax: jsonResponce.main.temp_max,
                tempMin: jsonResponce.main.temp_min,
                humidity: jsonResponce.main.humidity,
                feelsLike: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
    
            }
            setError(false);
            return result;
            
        } catch(err){
            throw err;
        }
        
    };

    
    
    let handleChange = (event) => {
        setCity(event.target.value);
    }
    
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo =await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        } 
        
    }

    return(
        <div  className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required 
            value={city}
            onChange={handleChange}
            />
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && < p style={{color:"red"}}>No Such Place Exists</p>}
            </form>
        </div>
    );
}