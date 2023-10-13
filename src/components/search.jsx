import React, { useState } from "react";
import '../index.css'
const Search = ({getInput}) => {
    const [input, setInput] = useState("")
    const handleInput = (event) => {
        setInput(event.target.value)
        getInput(event.target.value);
    }
    return (
        <div>
            <h2>Search a currency</h2>
            <input type="text" name="" id="" placeholder="Search" value={input} onChange={handleInput}/>
        </div>
    )
}
export default Search;