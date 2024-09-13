import { useLayoutEffect, useState } from "react"

const InputDataPersist = ()=>{
    const [input, setInput] = useState({
        name:"",
        city:"",
        email:"",
    });

    const onInputChange = (e)=>{
        const {name, value} = e.target;
        setInput((prev) =>({...prev, [name]:value}));// state will update in main dom only after the re-rendering
        console.log("value:", value);
        console.log("input:",input);
        const newData  = {...input, [name]:value};
        localStorage.setItem("input", JSON.stringify(newData));
    }

    useLayoutEffect(()=>{
        console.log("In useLayoutEffect");
        const formData = JSON.parse(localStorage.getItem("input"));
        console.log("formD:", formData);
        if(formData)
            setInput({...formData});
    },[])

    return(
        <div>
            <h1>Form</h1>
            <input 
                name="name"
                type="text"
                value={input?.name}
                placeholder="Enter Name"
                onChange={onInputChange}    
            />
            <input 
                name="city"
                type="text"
                value={input?.city}
                placeholder="Enter City"
                onChange={onInputChange}    
            />
            <input 
                name="email"
                type="email"
                value={input?.email}
                placeholder="Enter Email"
                onChange={onInputChange}    
            />
        </div>
    )
}

export default InputDataPersist;