import React from "react"
import ReactDOM from "react-dom"

const App = 

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
}

if (hours < 12) {
    timeOfDay = "morning"
    
} else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
} else {
    timeOfDay = "evening"
}

return (
    <h1>Good {timeOfDay}</h1>
);
ReactDOM.render(<App />, document.getElementById("greetings"));