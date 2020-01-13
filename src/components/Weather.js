import React from 'react'

export default function Weather(props) {
    return (
        <div>
        {props.city&&props.country && <p>City:{props.city} <br/>Country:{props.country}</p>}

        {props.temperature&& <p>temperature:{props.temperature}</p>}
        {props.humidity&&<p>Humidity:{props.humidity}</p>}
        {props.description&&<p>Description:{props.description}</p>}
        {props.error && <p>error:{props.error}</p>}
    </div>
    )
}
