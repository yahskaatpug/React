import { useEffect, useState } from "react"

const FuncMounting = ()=>{
    const [counter, setCounter] = useState(0);
    const [products, setProducts] = useState(null);

    useEffect(()=>{// useEffect with blank dependency array
        console.log("it will run only once during mounting");

        fetch("https://fakestoreapi.com/products")
        .then((data)=> data.json())
        .then((data)=> setProducts(data))
        .catch((error)=>console.log("error", error))
    },[]) // it will not run even if there is some change in state
    
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={()=>setCounter((prev) => prev+1)}>Increment</button>
            <button onClick={()=>setCounter((prev) => prev-1)}>Decrement</button>
            {
                products?(products.map((product)=>{
                    return <div key={product.id}>{product.title}</div>
                })):(
                    <p>Please wait</p>
                )
            }
        </div>
    )
}

export default FuncMounting;