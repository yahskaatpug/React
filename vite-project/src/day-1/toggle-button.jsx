import { useState } from "react"

const ToggleButton = ()=>{
    const [light, setLight] = useState(false);
    return(
        <>
        <p style={{color:light?"green":"red"}}>State: {light ?'On' : 'off'}</p>
        <button onClick={()=>setLight(!light)}>{light?'Turn on':'Turn off'}</button>
        </>
    )
}

export default ToggleButton;