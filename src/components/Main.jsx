import axios from "axios";     // Importing axios, which is a promise-based HTTP client for the browser and node.js
import { useState, useEffect } from "react";

function Main () { 
    const [items, setItems] = useState([])    // Declaring a state variable called items and a function called setItems to update the state
    
    useEffect(() => {
        axios.get("https://api.example.com/items")      // Fetching data from the API axios.get(url[, config]), axios returns a promise
            .then(response => setItems(response.data.meal))     // If the promise is resolved, the data is set to the state
            .catch(error => console.log(error))                 // If the promise is rejected, the error is logged to the console
    },[]);

const itemsList = items.map((strMeal, strMealThumb, idMeal) => {
    return (
        <section className="card">
            <img src={strMealThumb} />
            <section>
                <h2>{strMeal}</h2>
                <p>{idMeal}</p>
            </section>
        </section>
    )
})

return (
    <div>
        <h1>Meals</h1>
        {itemsList}
    </div>
)
}

export default Main;
