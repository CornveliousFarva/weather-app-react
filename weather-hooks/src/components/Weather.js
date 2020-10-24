import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {
    return(
        <div>
            {city && country && <p>{city}</p>}
            {temperature && <p>{temperature}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather