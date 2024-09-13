import { useEffect, useState } from "react"

const OnlineStatus = ()=>{
    const [isOnline, setOnline] = useState(navigator.onLine);
    useEffect(()=>{
        // const networkStatusEvent=()=>{
        //     console.log("yeeeahhh");
        //     setOnline(!isOnline);
        // }
        // window.addEventListener('online',networkStatusEvent);
        // window.addEventListener('offline',networkStatusEvent);
        window.addEventListener('online',()=>setOnline(true));
        window.addEventListener('offline',()=>setOnline(false));

        return() =>{
            window.removeEventListener('online',()=>setOnline(true));
            window.removeEventListener('offline',setOnline(false));
        }
    },[]);

    return(
        <div>
            {isOnline?"Wowo!! You are connected to the world of Internet":"Oops!! check your network tab"}
        </div>
    )
}

export default OnlineStatus;