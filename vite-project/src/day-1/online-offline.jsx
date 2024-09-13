import { useEffect, useState } from "react"

const OnlineStatus = ()=>{
    const [isOnline, setOnline] = useState(navigator.onLine);
    useEffect(()=>{
        const networkStatusEvent=()=>{
            setOnline(navigator.online);
        }
        window.addEventListener('online',networkStatusEvent);
        window.addEventListener('offline',networkStatusEvent);

        return() =>{
            window.removeEventListener('online',networkStatusEvent);
            window.removeEventListener('offline',networkStatusEvent);
        }
    },[]);

    return(
        <div>
            {isOnline?"Wowo!! You are connected to the world of Internet":"Oops!! check your network tab"}
        </div>
    )
}

export default OnlineStatus;