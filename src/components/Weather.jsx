import React, { useState, useEffect } from 'react';
import '../style/weather.css';
import { URL } from '../url';

function Weather() {
    const [city, setCity] = useState("gulistan");
    const [weather, setWeather] = useState(null);
    const [exchangeRates, setExchangeRates] = useState(null); // Valyuta kurslarini saqlash uchun holat
    const [loading, setLoading] = useState(true);

    const handleCityChange = (event) => {
        setCity(event.target.value.toLowerCase());
    };

    useEffect(() => {
        async function fetchWeatherData() {
            setLoading(true);
            try {
                let fetchWeather = await fetch(`${URL}/api/v1/weather`);
                let json = await fetchWeather.json();
                
                // Bugungi kun uchun sanani va haroratni olish
                const todayIndex = 0; // birinchi element sifatida olingan sanalar bugungi kun
                const todayWeather = {
                    date: json[city].date[todayIndex],
                    temperature_max: json[city].temperature_max[todayIndex],
                    temperature_min: json[city].temperature_min[todayIndex],
                    icon: json[city].current_weather_code[todayIndex].weather // icon kodini olamiz
                };
                
                setWeather(todayWeather);
            } catch (error) {
                console.error("Ob-havo ma'lumotlarini olishda xatolik yuz berdi:", error);
            } finally {
                setLoading(false);
            }
        }

        async function fetchExchangeRates() {
            try {
                let response = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
                let data = await response.json();
                // Asosiy valyutalar kurslarini olish
                const usd = data.find(item => item.Ccy === "USD")?.Rate || "Noma'lum";
                const eur = data.find(item => item.Ccy === "EUR")?.Rate || "Noma'lum";
                const rub = data.find(item => item.Ccy === "RUB")?.Rate || "Noma'lum";
                setExchangeRates({ usd, eur, rub });
            } catch (error) {
                console.error("Valyuta kurslarini olishda xatolik yuz berdi:", error);
            }
        }

        fetchWeatherData();
        fetchExchangeRates();
        
    }, [city]);

    return (
        <div className='weather_section'>
            <div className="app-container">
                <div className="top-bar">
                    <div className="select">
                        <select value={city} onChange={handleCityChange} className="city-select">
                            <option value="gulistan">Guliston</option>
                            <option value="jizzakh">Jizzax</option>
                            <option value="tashkent">Toshkent</option>
                            <option value="samarkand">Samarqand</option>
                            <option value="bukhara">Buxoro</option>
                            <option value="navoiy">Navoiy</option>
                            <option value="andijan">Andijon</option>
                            <option value="fergana">Farg'ona</option>
                            <option value="namangan">Namangan</option>
                            <option value="karshi">Qarshi</option>
                            <option value="termez">Surxondaryo</option>
                            <option value="nukus">Qoraqalpog'iston</option>
                            <option value="khiva">Xorazm</option>
                        </select>
                        <div className="date">{weather ? new Date(weather.date).toLocaleDateString() : "Sana yuklanmoqda..."}</div>
                    </div>

                    <div className="weather">
                        {loading ? (
                            <span className="loading">Yuklanmoqda...</span>
                        ) : weather ? (
                            <>
                                <span className="temperature">{Math.round((weather.temperature_min + weather.temperature_max) / 2)}°C</span>
                                <img 
                                    src={`${URL}${weather.icon}`} // backenddan kelgan icon kodiga mos URL
                                    alt="Weather Icon" 
                                    className="weather-icon" 
                                />
                            </>
                        ) : (
                            <span className="error">Ma'lumot yo'q</span>
                        )}
                    </div>
                    
                    <div className="exchange-rates">
                        <div className='exchange_div'>
                            <p>{weather ? new Date(weather.date).toLocaleDateString() : "Sana yuklanmoqda..."}</p>
                            <h4>MB valyuta kurslari</h4>
                            <a className="cbu-link" href="https://cbu.uz/oz/arkhiv-kursov-valyut/" target="_blank" rel="noopener noreferrer">www.cbu.uz</a>
                        </div>
                        <div className="rates_money">
                            <div>1 AQSh dollari = {exchangeRates ? exchangeRates.usd : "Yuklanmoqda..."}</div>
                            <div>1 evro = {exchangeRates ? exchangeRates.eur : "Yuklanmoqda..."}</div>
                            <div>1 rubl = {exchangeRates ? exchangeRates.rub : "Yuklanmoqda..."}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
