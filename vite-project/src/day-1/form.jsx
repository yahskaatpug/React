import { useState } from "react"

const InputForm = () =>{
    const [uName, usetName] = useState("");
    const handleFname= (e)=>{
        const {value} = e.target;
        usetName(value)
    }
    return (
        <form >
            <div className="formElement">
                <p htmlFor="fName">First Name :{uName} </p>
                <input type="text" name="uName" placeholder="First Name" onChange={handleFname}></input>
            </div>
        </form>
    )
}

export default InputForm;