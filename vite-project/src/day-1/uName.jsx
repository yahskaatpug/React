import { useState } from "react"

const UNameExample = ()=>{

    const [uNaame,setUName] = useState("Ankit");
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
    return(
        <>
        <div>
            <h1> Counter:{count} </h1>
            <div>
                <div >
                    {/* here we have argumet so we have pass it like arrow function */}
                    <button onClick={ ()=> setUName("Akshay")}>Change Name to Akshay</button>
                </div>
            </div>
            <div><span>{uNaame}</span></div>
        </div>
       
        <div>
            {/* we can directly pass the function name */}
            <button onClick={increment}>Increase count</button>
            {/* <button onClick={increment()}>Increase count</button> */}
            {/* here if call function normally, it will get called when the component renders, which create infinte lopp or infinte rerendering */}
        </div>
        </>
        );
}

export default UNameExample;