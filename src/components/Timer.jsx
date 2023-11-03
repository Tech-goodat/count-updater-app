import { useState } from "react"

function Timer() {
    const [name, setName]=useState("");
    const [number, updateCount] = useState(0);

    const setNameClicked = ()=>{
        setName("Here is your name")
    }
    const setNumberClicked = ()=>{
        updateCount(number + 1)
    }
  return (
    
    <div>
        <p>Name:{name}</p>
        <p>Lucky number:{number}</p>
        <button onClick={setNameClicked} >Update name</button>
        <button onClick={setNumberClicked}>Find number</button>
    </div>
  )
}

export default Timer