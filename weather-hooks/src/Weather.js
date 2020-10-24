import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {

    function matchValues(){
     if(description){
        const weatherDescription = description.split(' ')
        const keyWords = ['cloudy', 'clouds', 'cloud', 'overcast']
        for(let i = 0; i < weatherDescription.length; i++){
            if(keyWords.includes(weatherDescription[i])) {
                // eslint-disable-next-line jsx-a11y/alt-text
                return <img src="weather-hooks/src/clouds.jpeg" />
            }
        }
        console.log(keyWords)
        console.log(weatherDescription)   
    }}

    return (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} °F</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
        </div>
    )
}

export default Weather; 