import { useState, useEffect } from "react";
import About from "./About";
const NewTimer = () => {
    const [remDays, setRemDays] = useState('');
    const [remTime, setRemTime] = useState('');
    const [remainingTime, setRemainingTime] = useState(0);
    // console.log("testing of date picker ="+remDays);
    const calTimeRemaining = () => {
        if (!remDays || !remTime) {
            return;
          }

          const [year, month, day] = remDays.split('-');
          const [hours, minutes] = remTime.split(':');
          const tarDate = new Date(year, month - 1, day, hours, minutes);

        const now = new Date();
        const differenceTime = tarDate - now;
        setRemainingTime(differenceTime);
    }

    useEffect(() => {
        calTimeRemaining();
        const timerInterval = setInterval(calTimeRemaining, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [remDays, remTime]);

    const timeFormate = (ms) => {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // prop.timeProp(remainingTime)

    // console.log("TESTING : "+remainingTime);
    // const timeCheck = 'props drolling one to one';\

    const [inputName, setInputName] = useState();
    console.log(inputName);


    const sum = (x,y) =>{
        return x+y;
    }
    return (
        <>
        <h2>Playground </h2>
        {/* <About timeCheck='turboCoins' Add={sum}/> */}
            <div>

                <p props={remainingTime} ></p>
                {/* <h3>CountDown Timer</h3> */}
                <input type="date" placeholder="Enter days" name="remDays" value={remDays} onChange={(e) => setRemDays(e.target.value)} />
                <input type="time" placeholder="" name="remTime"
                    value={remTime} onChange={(e) => setRemTime(e.target.value)} />
             

             </div>
            {/* <div className="outputwrapper">
                <p>{timeFormate(remainingTime)}</p>
            </div> */}

            <label htmlFor="text">Name</label><br />
            <input type="text" placeholder="Enter Name" onChange={(e) =>setInputName(e.target.value)}/>
<br /><br />
            <button type="button" onClick={''}>Send Data</button>
        </>
    );
}
export default NewTimer;
