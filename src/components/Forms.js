import React from 'react'

export default function Forms(props) {
    return (
        <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Enter your city here.." />
            <input type="text" name="country" placeholder="Enter your country here.." />
            <button>Get weather</button>
        </form>
    </div>
    )
}
