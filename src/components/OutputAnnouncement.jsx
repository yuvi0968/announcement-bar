import React from 'react'

const OutputAnnouncement = () => {
  return (
    <div><p>OutputAnnouncement</p>
    
    <div className="display-content">
            {!btnClose &&(
                <p style={{
                    // background: form.bgColorMsg,
                    // color: form.colorMsg,
                    // fontSize: `${form.fontSize}px`,
                    // fontStyle: form.fontStyling,
                    // fontWeight: form.fontWeight,
                    // paddingTop: `${form.paddingTop}px`,
                    // paddingRight: `${form.paddingRight}px`,
                    // paddingBottom: `${form.paddingBottom}px`,
                    // paddingLeft: `${form.paddingLeft}px`,
                    // fontFamily: form.fontFamily
                    // animation: animation
                }}
                    className='content-bar'>
                    <span id='span' style={{
                        animationDuration: `${form.barSpeed}s`,
                    }} onMouseEnter={handleMouse} onMouseLeave={handleMouse}>{form.message}
                    
                    <div className='coupon-wrapper'><input type="text" value="ValueMart91" id="couponCode" readonly 
                    /><button className='btn-copy' 
                    style={{color:form.color}}  onClick={handleCopy}>COPY</button></div>

                <div className='timer-content'><span >{timeFormate(remainingTime)}</span></div>
                   </span>
                    <br /> 

                   <a type="button" className='close-btn' style={{backgroundColor:form.bgColorMsg, color:form.colorMsg}} onClick={() =>setBtnClose(true)}>X</a>
                </p>)}
            </div><br /></div>
  )
}
export default OutputAnnouncement;