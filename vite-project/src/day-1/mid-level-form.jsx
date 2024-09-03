import { useState } from "react"

const MidLevelInputForm = () =>{
    const [profile, setProfile] = useState({
        fName:"",
        lName:""
    });
    const handleProfile = (e)=>{
        const {value, name} = e.target;
        setProfile((prevData)=>({...prevData, [name]:value}));
    }
    return (
        <form >
            <div className="formElement">
                <p htmlFor="fName">First Name :{profile.fName} </p>
                <input type="text" name="fName" placeholder="First Name" onChange={handleProfile}></input>
            </div>
        </form>
    )
}

export default MidLevelInputForm;