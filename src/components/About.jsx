import React from 'react'
import NewTimer from './CountDownTimer';
const About = ({timeCheck,Add}) => {
  // console.log(props);

  
  const timeFormate = (ms) => {
   const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } 
  
  // const timer = timeFormate;
  console.log(timeCheck);
// console.log(Add());
  return (
    <div>
      <p>Welcome to Announcement App :  {timeCheck}</p>
      {/* <p>Give two values : {Add(23,877)}</p> */}
      <NewTimer  /> 
      {/* <NewTimer timeProp={timeFormate} /> */}
      {/* <div className="outputwrapper">
                <p>{prop.value}</p>
      </div> */}
{/* <NewTimer /> */}
</div>
  )
}

export default About

